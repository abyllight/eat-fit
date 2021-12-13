<template>
    <div>
        <v-row>
            <v-col>
                <v-btn
                    class="ma-3"
                    :loading="amo_loading"
                    :disabled="amo_loading"
                    color="primary"
                    @click="fetchLeads"
                >
                    Получить данные с AMOCRM
                </v-btn>
                <a
                    type="button"
                    href="/api/select/export"
                >
                    <v-btn
                        color="primary"
                        @click="excel"
                        class="my-3 mr-7"
                    >
                        Excel
                    </v-btn>
                </a>
                <v-chip
                    class="ma-2"
                    color="teal"
                    text-color="white"
                    label
                >
                    Итого: {{ select.total }}
                </v-chip>
                <v-chip
                    class="ma-2"
                    label
                >
                    XS: {{ select.xs }}
                </v-chip>
                <v-chip
                    class="ma-2"
                    label
                >
                    S: {{ select.s }}
                </v-chip>
                <v-chip
                    class="ma-2"
                    label
                >
                    M: {{ select.m }}
                </v-chip>
                <v-chip
                    class="ma-2"
                    label
                >
                    L: {{ select.l }}
                </v-chip>
                <v-chip
                    class="ma-2"
                    label
                >
                    XL: {{ select.xl }}
                </v-chip>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="4">
                <v-card>
                    <v-card-title>
                        <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Поиск"
                            single-line
                            hide-details
                        ></v-text-field>
                    </v-card-title>
                    <v-data-table
                        height="90vh"
                        :loading="loading"
                        loading-text="Loading... Please wait"
                        :headers="headers"
                        :items="orders"
                        :items-per-page="itemsPerPage"
                        item-key="id"
                        :search="search"
                        hide-default-footer
                        @click:row="showDetails"
                    >
                        <template v-slot:item.index="{ index }">
                            {{ index + 1 }}
                        </template>
                    </v-data-table>
                </v-card>
            </v-col>
            <v-col v-if="Object.keys(order).length > 0">
                <h3 class="mb-3">{{order.name}}</h3>
                <v-row>
                    <v-col
                        cols="12" md="4"
                        v-for="(ration,key) in rations"
                        :key="key"
                    >
                        <v-card
                            :color="getSelectColor(ration.id)"
                        >
                            <v-card-title>{{ration.name}}</v-card-title>
                            <v-card-subtitle>{{getSelectName(ration.id)}}</v-card-subtitle>
                            <v-card-actions>
                                <v-btn
                                    color="primary"
                                    text
                                    @click="openSettings(ration)"
                                >
                                    настроить
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-dialog
                v-model="dialog"
                fullscreen
                hide-overlay
                transition="dialog-bottom-transition"
            >
                <v-card>
                    <v-toolbar
                        dark
                        color="primary"
                    >
                        <v-btn
                            icon
                            dark
                            @click="close"
                        >
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-toolbar-title>Диета</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-title v-if="order">
                        <span class="text-h5"> {{order.name}} {{order.tag}}</span>
                    </v-card-title>
                    <v-card-text v-if="order">
                        <v-container fluid>
                            <v-row>
                                <v-col
                                    cols="12"
                                    sm="12"
                                    lg="6"
                                >
                                    <v-card v-if="order.diet" color="lime lighten-4">
                                        <v-card-text>
                                            {{order.diet}}
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                                <v-col>
                                    <v-card v-if="order.diet_old" class="mt-4" color="red lighten-4">
                                        <v-card-text>
                                            {{order.diet_old}}
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                            <h3 class="my-5">Черный список</h3>
                            <v-row class="mb-4">
                                <v-col sm="12" lg="4">
                                    <v-autocomplete
                                        v-model="applied_categories"
                                        :items="categories"
                                        @change="applyCategories"
                                        item-text="name"
                                        item-value="id"
                                        clearable
                                        outlined
                                        label="Категории"
                                        multiple
                                    ></v-autocomplete>
                                </v-col>
                                <v-col sm="12" lg="8">
                                    <v-autocomplete
                                        v-model="mix"
                                        :items="ingredients"
                                        item-text="name"
                                        item-value="id"
                                        clearable
                                        outlined
                                        small-chips
                                        label="Ингредиенты"
                                        multiple
                                    ></v-autocomplete>
                                    <v-btn
                                        dark
                                        @click="addToBlacklist"
                                    >
                                        Сохранить
                                    </v-btn>
                                </v-col>
                            </v-row>
                            <h3 class="my-5">Зеленый список</h3>
                            <v-row class="mb-4">
                                <v-col sm="12" lg="4">
                                    <v-text-field
                                        v-model="tag"
                                        clearable
                                        label="Тэг"
                                        outlined
                                        :error-messages="errors.tag"
                                    ></v-text-field>
                                    <v-btn
                                        color="primary"
                                        @click="addTag"
                                    >
                                        Добавить
                                    </v-btn>
                                </v-col>
                                <v-col sm="12" lg="8">
                                    <v-chip
                                        v-for="(tag,index) in tags"
                                        :key="index"
                                        class="ma-2"
                                        close
                                        @click:close="removeTag(tag)"
                                    >
                                        {{ tag }}
                                    </v-chip>
                                </v-col>
                            </v-row>
                            <v-divider class="my-6"></v-divider>
                            <h2 class="mb-6">{{cuisine.name}} - {{ration_name}}</h2>

                            <v-row class="py-3">
                                <v-col
                                    v-if="Object.keys(previous).length > 0"
                                    cols="3"
                                >
                                    <h4>{{previous.created_at}}</h4>
                                    <span>{{previous.cuisine}}</span>
                                    <v-list v-if="dish" dense>
                                        <v-subheader v-if="previous.dish">{{previous.dish.name}}</v-subheader>
                                        <v-list-item
                                            v-for="(ing, i) in previous.ingredients"
                                            :key="i"
                                            :class="hasPreviousIncludeIngredient(ing.id) ? 'yellow lighten-3' : ''"
                                        >
                                            <v-list-item-content>
                                                <v-list-item-title>{{i+1}}. {{ing.name}}</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list>
                                    <v-card class="mb-5 mt-3" v-if="previous.dish_name" color="blue-grey lighten-5">
                                        <v-card-title>{{previous.dish_name}}</v-card-title>
                                        <v-card-subtitle>{{previous.description}}</v-card-subtitle>
                                    </v-card>
                                </v-col>
                                <v-col cols="4">
                                    <h4>Сегодня</h4>
                                    <span>{{cuisine.name}}</span>
                                    <v-row class="mt-2">
                                        <v-col cols="8" v-if="dish">
                                            <v-select
                                                v-model="dish"
                                                dense
                                                :items="dishes"
                                                item-text="name"
                                                return-object
                                                outlined
                                                label="Блюда"
                                            ></v-select>
                                        </v-col>
                                        <v-col v-if="dish">
                                            <v-btn
                                                color="primary"
                                                small
                                                @click="setDish"
                                                :disabled="dish.id === result.dish_id"
                                            >
                                                Выбрать
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                    <div v-if="dish && result">
                                        <v-sheet
                                            v-for="(ing, key) in dish.ingredients"
                                            :key="ing.id"
                                            elevation="1"
                                            class="pa-3 mb-3 flex justify-center"

                                        >
                                            <div class="flex flex-row">

                                                <p :class="hasResultIncludeIngredient(ing.id) ? '' : 'text-decoration-line-through'">
                                                    {{key+1}}. {{ing.name}}
                                                </p>

                                                <span v-if="ing.analog">
                                                    {{ing.analog.name}}
                                                </span>

                                            </div>
                                            <div class="mt-2">
                                                <v-btn
                                                    v-if="dish.id === result.dish_id && !ing.analog"
                                                    x-small
                                                    @click="hasResultIncludeIngredient(ing.id) ? removeIngredient(ing.id) : addIngredient(ing.id)"
                                                    :class="hasResultIncludeIngredient(ing.id) ? 'red' : 'green'"
                                                >
                                                    {{hasResultIncludeIngredient(ing.id) ? 'Убрать' : 'Вернуть'}}
                                                </v-btn>
                                                <v-btn
                                                    v-if="dish.id === result.dish_id && hasResultIncludeIngredient(ing.id)"
                                                    x-small
                                                    @click="!ing.analog ? showAnalogs(ing.id) : returnIngredient(ing.id, ing.analog.id)"
                                                    class="ml-2"
                                                >
                                                    {{!ing.analog ? 'Замена' : 'Отменить замену'}}
                                                </v-btn>
                                            </div>
                                        </v-sheet>
                                    </div>
                                </v-col>
                                <v-col cols="5">
                                    <h4>Итог</h4>
                                    <span>{{cuisine.name}}</span>
                                    <div v-if="result">
                                        <v-card class="mb-5 mt-3" color="blue-grey lighten-3">
                                            <v-card-title>{{result.dish_name}}</v-card-title>
                                            <v-card-subtitle>{{result.description}}</v-card-subtitle>
                                            <v-card-actions>
                                                <v-btn text @click="dialog3 = true">
                                                    редактировать
                                                </v-btn>
                                            </v-card-actions>
                                        </v-card>
                                        <v-sheet
                                            v-for="(ing, key) in result.ingredients"
                                            :key="ing.id"
                                            elevation="1"
                                            class="pa-3 mb-3 flex justify-center"
                                            :color="mix.includes(ing.id) ? 'red lighten-3' : ''"
                                        >
                                            {{key+1}}. {{ing.name}}
                                        </v-sheet>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-row>
        <v-dialog
            v-model="dialog2"
            scrollable
            persistent
            max-width="800px"
        >
            <v-card>
                <v-card-title>
                    Замена
                </v-card-title>
                <v-card-text style="height: 400px">
                    <v-row class="mt-3">
                        <v-col cols="12" md="4">
                            <v-select
                                v-model="chosen_category"
                                :items="ingredient_categories"
                                label="Категории"
                                item-text="name"
                                return-object
                                outlined
                                clearable
                            >
                            </v-select>
                        </v-col>
                        <v-col v-if="chosen_category">
                            <v-sheet
                                v-for="(ing, key) in chosen_category.ingredients"
                                :key="key"
                                elevation="1"
                                class="pa-3 mb-3 flex justify-center"
                                :class="mix.includes(ing.id) ? 'red lighten-3' : ''"
                            >
                                <p>
                                    {{key+1}}. {{ing.name}}
                                </p>
                                <div class="mt-2">
                                    <v-btn
                                        x-small
                                        @click="replaceIngredient(ing.id)"
                                    >
                                        выбрать
                                    </v-btn>
                                </div>
                            </v-sheet>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-btn
                        color="primary"
                        text
                        @click="closeDialog2"
                    >
                        Закрыть
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog
            v-model="dialog3"
            max-width="700px"
        >
            <v-card>
                <v-card-title>
                    Редактировать
                </v-card-title>
                <v-card-text>
                    <v-text-field
                        v-model="result.dish_name"
                        clearable
                        outlined
                        label="Название"
                    >
                    </v-text-field>
                    <v-textarea
                        v-model="result.description"
                        outlined
                        clearable
                        label="Дополнительная информация"
                    >
                    </v-textarea>
                </v-card-text>
                <v-card-actions>
                    <v-btn
                        color="primary"
                        text
                        @click="saveDetails"
                    >
                        Сохранить
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
    import axios from "axios";
    export default {
        name: 'KitchenOrders',
        data: () => ({
            orders: [],
            select: [],
            itemsPerPage: 300,
            search: '',
            headers: [
                { text: '#', value: 'index' },
                { text: 'Имя', value: 'name' },
                { text: 'Тэг', value: 'tag' }
            ],
            amo_loading: false,
            loading: true,
            dialog: false,
            dialog2: false,
            dialog3: false,
            ingredients: [],
            categories: [],
            applied_categories: [],
            ingredient_categories: [],
            chosen_category: {},
            chosen_ingredient: {},
            target_ingredient: null,
            dishes: [],
            dish: {},
            select_previous: [],
            select_result: [],
            previous: {},
            result: {},
            order: {},
            cuisine: {},
            ration_id: null,
            ration_name: null,
            mix: [],
            tag: '',
            tags: [],
            errors: [],
            rations: []
        }),
        created() {
            this.getLeads()
            this.getSelect()
            this.getIngredients()
            this.getCategories()
            this.getCuisine()
            this.getRations()
        },
        methods: {
            async getLeads() {
                this.loading = true
                await axios
                    .get('/api/orders/select-orders')
                    .then(response => {
                        this.orders = response.data
                    })
                    .catch(error => {
                        this.loading = false
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': error.message,
                            'color': 'error',
                            'type': 'error'
                        })
                    })
                    .finally(() => (this.loading = false))
            },
            async getSelect(){
                await axios
                    .get('/api/orders/select')
                    .then(response => {
                        this.select = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            async fetchLeads() {
                this.amo_loading = true
                await axios
                    .get('/api/amo/leads')
                    .then(() => {
                        this.getLeads()
                    })
                    .catch(error => {
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': error.message,
                            'color': 'error',
                            'type': 'error'
                        })
                    })
                    .finally(() => (this.amo_loading = false))
            },
            async getIngredients(){
                await axios
                    .get('/api/ingredients')
                    .then(response => {
                        this.ingredients = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            async getCategories(){
                await axios
                    .get('/api/categories')
                    .then(response => {
                        this.categories = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            async getCategoriesByIngredient(id){
                await axios
                    .get('/api/categories/ingredient/'+id)
                    .then(response => {
                        this.ingredient_categories = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            async getRations(){
                await axios
                    .get('/api/rations/required')
                    .then(response => {
                        this.rations = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            async getDishes(id){
                await axios
                    .get('/api/dishes/ration/'+id)
                    .then(response => {
                        this.dishes = response.data

                        if (this.dishes.length > 0){
                            this.dish = this.dishes.find(obj => {
                                return obj.id === this.result.dish_id
                            })

                            if (!this.dish){
                                this.dish = this.dishes[0]
                            }
                        }else {
                            this.dish.ingredients = []
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            async getCuisine(){
                await axios
                    .get('/api/cuisine/duty')
                    .then(response => {
                        this.cuisine = response.data
                    })
                    .catch(error => {
                        this.loading = false
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': error.message,
                            'color': 'error',
                            'type': 'error'
                        })
                    })
            },
            async getPreviousOrderSelectByRationId(id){
                await axios
                        .get('/api/orders/'+this.order.id+'/previous/select/ration/'+id)
                        .then(response => {
                            this.previous = response.data
                        })
                        .catch(error => {
                            console.log(error)
                        })
            },
            async getOrderSelectByRationId(id){
                await axios
                    .get('/api/orders/'+this.order.id+'/today/select/ration/'+id)
                    .then(response => {
                        this.result = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            async getSelectByOrder(id){
                await axios
                    .get('/api/select/order/'+id)
                    .then(response => {
                        this.select_previous = response.data.previous
                        this.select_result = response.data.result
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            showDetails(index){
                this.order = index
                this.mix = index.blacklist
                this.tags = index.wishlist
                this.getSelectByOrder(index.id)
            },
            getSelectColor(id){
                if (this.select_result.length > 0){
                    let select = this.select_result.find(x => x.ration_id === id)
                    return select ? select.color : ''
                }

                return '';
            },
            getSelectName(id){
                if (this.select_result.length > 0){
                    let select = this.select_result.find(x => x.ration_id === id)
                    return select ? select.dish_name : ''
                }

                return '';
            },
            close(){
                this.order = {}
                this.mix = []
                this.dialog = false
                this.applied_categories = []
                this.tag = ''
            },
            closeDialog2(){
                this.ingredient_categories = []
                this.chosen_category = {}
                this.chosen_ingredient = {}
                this.target_ingredient = null
                this.dialog2 = false
            },
            applyCategories(){
                let ings = this.applied_categories.map(item => {
                    let category = this.categories.find(obj => {
                        return obj.id === item
                    })
                    return category.ingredient_ids
                })
                ings = ings.flat()
                ings = ings.concat(this.order.blacklist)
                this.mix = [...new Set(ings)]
            },
            getBlacklist(){
                axios
                    .get('/api/order/blacklist/'+this.order.id)
                    .then(response => {
                    })
                    .catch(error => {
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': error.msg,
                            'color': 'error',
                            'type': 'error'
                        })
                    })
            },
            addToBlacklist(){
                axios
                    .post('/api/blacklist', {
                        id: this.order.id,
                        blacklist: this.mix
                    })
                    .then(response => {
                        this.getBlacklist()
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.msg,
                            'color': 'green',
                            'type': 'success'
                        })
                    })
                    .catch(error => {
                        console.log(error)
                        this.errors = error.response.data.errors
                    })
            },
            getWishlist(){
                axios
                    .get('/api/order/wishlist/'+this.order.id)
                    .then(response => {
                        this.tags = response.data.data
                    })
                    .catch(error => {
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': error.msg,
                            'color': 'error',
                            'type': 'error'
                        })
                    })
            },
            addTag(){
                axios
                    .post('/api/wishlist', {
                        id: this.order.id,
                        tag: this.tag
                    })
                    .then(response => {
                        this.tag = ''
                        this.getWishlist()
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.msg,
                            'color': response.data.status ? 'green' : 'error',
                            'type': response.data.status ? 'success' : 'error'
                        })
                        this.errors = []
                    })
                    .catch(error => {
                        this.errors = error.response.data.errors
                    })
            },
            removeTag(tag){
                axios
                    .post('/api/wishlist/remove', {
                        id: this.order.id,
                        tag: tag
                    })
                    .then(response => {
                        this.getWishlist()
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.msg,
                            'color': response.data.status ? 'green' : 'error',
                            'type': response.data.status ? 'success' : 'error'
                        })
                    })
                    .catch(error => {
                        console.log(error)
                        this.errors = error.response.data.errors
                    })
            },
            hasResultIncludeIngredient(id){
                return Object.keys(this.result).length !== 0 && this.result.ingredient_ids.includes(id)
            },
            hasPreviousIncludeIngredient(id){
                return Object.keys(this.dish).length !== 0 && this.dish.ingredient_ids.includes(id)
            },
            setDish(){
                axios
                    .post('/api/select/add/dish', {
                        select_id: this.result ? this.result.id : null,
                        order_id: this.order.id,
                        ration_id: this.ration_id,
                        dish_id: this.dish.id
                    })
                    .then(response => {
                        if (!response.data.status){
                            this.$store.dispatch('showAlert', {
                                'isVisible': true,
                                'msg': response.data.msg,
                                'color': 'error',
                                'type': 'error'
                            })
                        }
                       this.result = response.data.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            showAnalogs(id){
                this.getCategoriesByIngredient(id)
                this.target_ingredient = id
                this.dialog2 = true
            },
            addIngredient(id){
                axios
                    .post('/api/select/add/ingredient', {
                        select_id: this.result.id,
                        ingredient_id: id
                    })
                    .then(response => {
                        if (!response.data.status){
                            this.$store.dispatch('showAlert', {
                                'isVisible': true,
                                'msg': response.data.msg,
                                'color': 'error',
                                'type': 'error'
                            })
                        }
                        this.result = response.data.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            removeIngredient(id){
                axios
                    .post('/api/select/remove/ingredient', {
                        select_id: this.result.id,
                        ingredient_id: id
                    })
                    .then(response => {
                        if (!response.data.status){
                            this.$store.dispatch('showAlert', {
                                'isVisible': true,
                                'msg': response.data.msg,
                                'color': 'error',
                                'type': 'error'
                            })
                        }
                        this.result = response.data.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            replaceIngredient(id){
                axios
                    .post('/api/select/replace/ingredient', {
                        select_id: this.result.id,
                        ingredient_id: this.target_ingredient,
                        analog_id: id
                    })
                    .then(response => {
                        if (response.data.status){
                            this.result = response.data.select
                            let ingredient = response.data.ingredient
                            let index = this.dish.ingredients.findIndex((obj => obj.id === ingredient.id))
                            this.dish.ingredients[index] = ingredient
                            this.closeDialog2()
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            returnIngredient(target_id, analog_id){
                axios
                    .post('/api/select/return/ingredient', {
                        select_id: this.result.id,
                        ingredient_id: target_id,
                        analog_id: analog_id
                    })
                    .then(response => {
                        if (response.data.status){
                            this.result = response.data.select
                            let ingredient = response.data.ingredient
                            let index = this.dish.ingredients.findIndex((obj => obj.id === ingredient.id))
                            this.dish.ingredients[index] = ingredient
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            excel(){
                axios
                    .get('/api/select/export')
                    .then(response => {
                        console.log(response)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            openSettings(ration){
                this.previous = this.select_previous.find(obj => obj.ration_id === ration.id) ?? {}
                this.result = this.select_result.find(obj => obj.ration_id === ration.id) ?? {}
                this.getDishes(ration.id)
                this.ration_id = ration.id
                this.ration_name = ration.name
                this.dialog = true
            },
            saveDetails(){
                axios
                    .post('/api/select/add/details', this.result)
                    .then(response => {
                        this.result = response.data.data
                        this.dialog3 = false
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            remove(){},
        }
    }
</script>
