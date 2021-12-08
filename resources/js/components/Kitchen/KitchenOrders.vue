<template>
    <div>
        <v-row>
            <v-btn
                class="ma-3"
                :loading="amo_loading"
                :disabled="amo_loading"
                color="primary"
                @click="fetchLeads"
            >
                Получить данные с AMOCRM
            </v-btn>
        </v-row>
        <v-row>
            <v-col cols="12" sm="12" lg="9">
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
            <v-col>
                <v-card
                    color="#385F73"
                    dark
                    class="mb-5"
                >
                    <v-card-title class="text-h5">
                        Итого: {{ orders.length }}
                    </v-card-title>
                </v-card>
                <v-card class="mb-5">
                    <v-card-title class="text-h5">
                        Lite: {{ lite.total }}
                    </v-card-title>
                    <v-card-text>
                        <div>
                            <v-chip
                                class="ma-2"
                                label
                            >
                                XS: {{ lite.xs }}
                            </v-chip>
                            <v-chip
                                class="ma-2"
                                label
                            >
                                S: {{ lite.s }}
                            </v-chip>
                            <v-chip
                                class="ma-2"
                                label
                            >
                                M: {{ lite.m }}
                            </v-chip>
                            <v-chip
                                class="ma-2"
                                label
                            >
                                L: {{ lite.l }}
                            </v-chip>
                            <v-chip
                                class="ma-2"
                                label
                            >
                                XL: {{ lite.xl }}
                            </v-chip>
                        </div>
                    </v-card-text>
                </v-card>
                <v-card class="mb-5">
                    <v-card-title class="text-h5">
                        Select: {{ select.total }}
                    </v-card-title>
                    <v-card-text>
                        <div>
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
                        </div>
                    </v-card-text>
                </v-card>
                <v-card class="mb-5">
                    <v-card-title class="text-h5">
                        Detox: {{ detox }}
                    </v-card-title>
                </v-card>
                <v-card>
                    <v-card-title class="text-h5">
                        GO: {{ go }}
                    </v-card-title>
                </v-card>
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
                            <h2 class="mb-6">{{cuisine.name}}</h2>

                            <v-row class="py-3">
                                <v-expansion-panels>
                                    <v-expansion-panel
                                        v-for="ration in rations"
                                        :key="ration.id"
                                        @click="openRation(ration.id)"
                                    >
                                        <v-expansion-panel-header>
                                            {{ration.name}}
                                        </v-expansion-panel-header>
                                        <v-expansion-panel-content>
                                            <v-row>
                                                <v-col
                                                    v-if="previous"
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
                                                    <p>
                                                        {{previous_description}}
                                                    </p>
                                                </v-col>
                                                <v-col cols="5">
                                                    <h4>Сегодня</h4>
                                                    <span>{{cuisine.name}}</span>
                                                    <v-row class="mt-2">
                                                        <v-col>
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
                                                                    v-if="dish && dish.id === result.dish_id"
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
                                                <v-col>
                                                    <h4>Итог</h4>
                                                    <span>{{cuisine.name}}</span>
                                                    <div v-if="result">
                                                        <p class="my-4">{{result.dish ? result.dish.name : ''}}</p>
                                                        <v-sheet
                                                            v-for="(ing, key) in result.ingredients"
                                                            :key="ing.id"
                                                            elevation="1"
                                                            class="pa-3 mb-3 flex justify-center"
                                                            :color="mix.includes(ing.id) ? 'red lighten-3' : ''"
                                                        >
                                                            {{key+1}}. {{ing.name}}
                                                        </v-sheet>
                                                        <v-textarea
                                                            v-model="result_description"
                                                            outlined
                                                            clearable
                                                            label="Доп. инфо"
                                                        >
                                                        </v-textarea>
                                                        <v-btn
                                                            color="primary"
                                                            @click="setDescription"
                                                        >
                                                            сохранить
                                                        </v-btn>
                                                    </div>
                                                </v-col>
                                            </v-row>
                                        </v-expansion-panel-content>
                                    </v-expansion-panel>
                                </v-expansion-panels>
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
    </div>
</template>
<script>
    import axios from "axios";
    export default {
        name: 'KitchenOrders',
        data: () => ({
            orders: [],
            lite: [],
            select: [],
            detox: [],
            go: [],
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
            mix: [],
            tag: '',
            tags: [],
            errors: [],
            rations: [],
            result_description: '',
            previous_description: ''
        }),
        created() {
            this.getLeads()
            this.getLite()
            this.getSelect()
            this.getDetox()
            this.getGo()
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
            async getLite(){
                await axios
                    .get('/api/orders/lite')
                    .then(response => {
                        this.lite = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
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
            async getDetox(){
                await axios
                    .get('/api/orders/detox')
                    .then(response => {
                        this.detox = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            async getGo(){
                await axios
                    .get('/api/orders/go')
                    .then(response => {
                        this.go = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            async webhook() {
                this.amo_loading = true
                await axios
                    .get('/api/webhook')
                    .then((response) => {
                        console.log(response)
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
                                return obj.id === this.result && this.result.dish_id
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
            showDetails(index){
                this.order = index
                this.mix = index.blacklist
                this.tags = index.wishlist
                this.select_previous = index.previous
                this.select_result = index.result
                this.dialog = true
            },
            close(){
                this.order = {}
                this.mix = []
                this.dialog = false
                this.applied_categories = []
                this.tag = ''
                this.result_description = ''
                this.previous_description = ''
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
            openRation(id){
                this.previous = this.select_previous.find(obj => obj.ration_id === id) ?? {}
                this.result = this.select_result.find(obj => obj.ration_id === id) ?? {}
                this.result_description = this.result.description
                this.previous_description = this.previous.description
                this.getDishes(id)
            },
            hasResultIncludeIngredient(id){
                return Object.keys(this.result).length !== 0 && this.result.ingredient_ids.includes(id)
            },
            hasPreviousIncludeIngredient(id){
                return Object.keys(this.dish).length !== 0 && this.dish.ingredient_ids.includes(id)
            },
            setDish(){
                axios
                    .post('/api/select/'+this.result.id+'/dish/'+this.dish.id)
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
            setDescription(){
                axios
                    .post('/api/select/'+this.result.id+'/description',{
                        description: this.result_description
                    })
                    .then(response => {
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.msg,
                            'color': response.data.status ? 'success' :'error',
                            'type': response.data.status ? 'success' :'error',
                        })
                        this.result_description = response.data.description
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
            }
        }
    }
</script>
