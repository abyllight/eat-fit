<template>
    <div>
        <!--  Select data section  -->
        <v-row>
            <v-col>
                <v-btn
                    class="ma-3"
                    :loading="amo_loading"
                    :disabled="amo_loading"
                    color="primary"
                    @click="fetchOrdersFromAmo"
                >
                    Получить данные с AMOCRM
                </v-btn>
                <a
                    type="button"
                    href="/api/select/export"
                >
                    <v-btn
                        color="primary"
                        @click="exportExcel"
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
                    Итого: {{ select_stat.total }}
                </v-chip>
                <v-chip
                    class="ma-2"
                    label
                >
                    XS: {{ select_stat.xs }}
                </v-chip>
                <v-chip
                    class="ma-2"
                    label
                >
                    S: {{ select_stat.s }}
                </v-chip>
                <v-chip
                    class="ma-2"
                    label
                >
                    M: {{ select_stat.m }}
                </v-chip>
                <v-chip
                    class="ma-2"
                    label
                >
                    L: {{ select_stat.l }}
                </v-chip>
                <v-chip
                    class="ma-2"
                    label
                >
                    XL: {{ select_stat.xl }}
                </v-chip>
            </v-col>
        </v-row>

        <!--   Customer list and select cards   -->
        <v-row>

            <!--  Table list          -->
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
                        @click:row="showOrderDetails"
                    >
                        <template v-slot:item.index="{ index }">
                            {{ index + 1 }}
                        </template>
                    </v-data-table>
                </v-card>
            </v-col>

            <!--   Cards         -->
            <v-col v-if="Object.keys(order).length > 0">

                <h3 class="mb-3">{{order.name}}</h3>

                <v-row>
                    <v-col
                        cols="12" md="4"
                        v-for="(result, key) in select_result"
                        :key="key"
                    >
                        <v-card
                            :color="result.color"
                            :loading="select_loading"
                        >
                            <v-card-title>{{result.ration.name}}</v-card-title>
                            <v-card-subtitle>{{result.dish_name}}</v-card-subtitle>
                            <v-card-actions>
                                <v-btn
                                    v-if="result.is_active"
                                    color="primary"
                                    text
                                    @click="openSettings(result.ration)"
                                >
                                    настроить
                                </v-btn>
                                <v-btn
                                    color="black"
                                    text
                                    @click="activateDeactivate(result.id)"
                                >
                                    {{result.is_active ? 'Убрать' : 'Вернуть'}}
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <!--  Select Modal   -->
        <v-row justify="center">
            <v-dialog
                v-model="dialog"
                fullscreen
                hide-overlay
                transition="dialog-bottom-transition"
            >
                <v-card>

                    <!-- Toolbar  -->
                    <v-toolbar
                        dark
                        color="primary"
                    >
                        <v-btn
                            icon
                            dark
                            @click="dialog = false"
                        >
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-toolbar-title>Диета - {{ration.name}}</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>

                    <v-card-title>{{order.name}} - {{order.tag}}</v-card-title>

                    <v-card-text v-if="order">
                        <v-container fluid>

                            <!-- Diet description    -->
                            <v-row>
                                <v-col
                                    cols="12"
                                    sm="12"
                                    lg="4   "
                                >
                                    <v-card v-if="order.diet" class="mb-4" color="lime lighten-4">
                                        <v-card-text>
                                            {{order.diet}}
                                        </v-card-text>
                                    </v-card>
                                </v-col>

                                <v-col
                                    cols="12"
                                    sm="12"
                                    lg="4   "
                                >
                                    <v-card v-if="order.diet_old" color="red lighten-4">
                                        <v-card-text>
                                            {{order.diet_old}}
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>

                            <!-- Blacklist -->
                            <v-divider class="my-8"></v-divider>
                            <h3 class="mb-5">Черный список</h3>
                            <v-row>
                                <v-col cols="12" sm="12" lg="4">
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

                                <v-col cols="12" sm="12" lg="8">
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
                                    >
                                        <template v-slot:selection="data">
                                            <v-chip
                                                small
                                                v-bind="data.attrs"
                                                :input-value="data.selected"
                                                close
                                                @click="data.select"
                                                @click:close="removeIngredientFromBlacklist(data.item.id)"
                                            >
                                                {{ data.item.name }}
                                            </v-chip>
                                        </template>
                                    </v-autocomplete>
                                    <v-btn
                                        dark
                                        @click="saveBlacklist"
                                    >
                                        Сохранить
                                    </v-btn>
                                </v-col>
                            </v-row>

                            <!-- Wishlist -->
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
                                        v-for="t in wishlist"
                                        :key="t.wish"
                                        class="ma-2"
                                        :color="wish_ids.includes(t.id) ? 'lime' : ''"
                                        close
                                        @click="addWishToSelect(t.id)"
                                        @click:close="removeTag(t)"
                                    >
                                        {{ t.wish }}
                                    </v-chip>
                                </v-col>
                            </v-row>
                            <v-divider class="my-6"></v-divider>

                            <!-- Nakovalnya -->

                            <h2 class="mb-6">{{cuisine.name}} - {{ration.name}}</h2>
                            <v-row class="py-3">

                                <!-- Previous -->
                                <v-col
                                    v-if="Object.keys(previous).length > 0"
                                    cols="3"
                                >
                                    <h4>{{previous.created_at}}</h4>
                                    <span>{{previous.cuisine}}</span>
                                    <v-card class="mb-5 mt-3" v-if="previous.dish_name" color="blue-grey lighten-5">
                                        <v-card-title>{{previous.dish_name}}</v-card-title>
                                        <v-card-subtitle>{{previous.description}}</v-card-subtitle>
                                    </v-card>
                                    <v-list dense>
                                        <v-list-item
                                            v-for="(ing, i) in previous.ingredients"
                                            :key="i"
                                            :class="hasResultIncludeIngredient(ing.id) ? 'yellow lighten-3' : ''"
                                        >
                                            <v-list-item-content>
                                                <v-list-item-title>{{i+1}}. {{ing.name}}</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list>
                                </v-col>

                                <!-- Today -->
                                <v-col cols="5">
                                    <h4>Сегодня</h4>
                                    <span>{{cuisine.name}}</span>
                                    <v-row class="mt-2">
                                        <v-col cols="3">
                                            <v-select
                                                v-model="ration_id"
                                                :items="rations"
                                                @change="getDishesByRation(ration_id)"
                                                dense
                                                item-text="name"
                                                item-value="iiko_id"
                                                outlined
                                                label="Рационы"
                                            ></v-select>
                                        </v-col>
                                        <v-col cols="6" v-if="dish">
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
                                        <v-col cols="3" v-if="dish">
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
                                            :color="mix.includes(ing.id) ? 'red lighten-3' : ''"
                                        >
                                            <div class="flex flex-row">

                                                <p :class="hasResultIncludeIngredient(ing.id) ? '' : 'text-decoration-line-through'">
                                                    {{key+1}}. {{ing.name}}
                                                </p>

                                                <span v-if="hasAnalog(ing.id)">
                                                    {{getAnalogName(ing.id)}}
                                                </span>

                                            </div>
                                            <div v-if="dish.id === result.dish_id" class="mt-2">
                                                <v-btn
                                                    v-if="!hasAnalog(ing.id)"
                                                    x-small
                                                    @click="hasResultIncludeIngredient(ing.id) ? removeIngredient(ing.id) : addIngredient(ing.id)"
                                                    :class="hasResultIncludeIngredient(ing.id) ? 'red white--text' : 'green'"
                                                >
                                                    {{hasResultIncludeIngredient(ing.id) ? 'Убрать' : 'Вернуть'}}
                                                </v-btn>
                                                <v-btn
                                                    v-if="!isDutyDishId"
                                                    x-small
                                                    @click="!hasAnalog(ing.id) ? showAnalogs(ing.id) : returnIngredient(ing.id)"
                                                    class="ml-2"
                                                >
                                                    {{!hasAnalog(ing.id) ? 'Замена' : 'Отменить замену'}}
                                                </v-btn>
                                            </div>
                                        </v-sheet>
                                    </div>
                                </v-col>

                                <!-- Result -->
                                <v-col cols="4">
                                    <h4>Итог</h4>
                                    <span>{{cuisine.name}}</span>
                                    <div v-if="Object.keys(result).length > 0">
                                        <v-card class="mb-5 mt-3" color="blue-grey lighten-3">
                                            <v-card-title>{{result.dish_name}}</v-card-title>
                                            <v-card-subtitle>{{result.description}}</v-card-subtitle>
                                            <v-card-actions>
                                                <v-btn text @click="dialog3 = true">
                                                    редактировать
                                                </v-btn>
                                            </v-card-actions>
                                        </v-card>
                                        <v-autocomplete
                                            v-if="result.status === 2"
                                            v-model="r2_val"
                                            :items="ingredients"
                                            item-text="name"
                                            item-value="id"
                                            clearable
                                            outlined
                                            label="Добавить ингредиент"
                                            @change="addExtra"
                                        ></v-autocomplete>
                                        <v-sheet
                                            v-for="(ing, i) in result.ingredients"
                                            :key="i"
                                            elevation="1"
                                            class="pa-3 mb-3"
                                            :color="mix.includes(ing.id) ? 'red lighten-3' : ''"
                                        >
                                            <v-row>
                                                <v-col v-if="ing.pivot.is_visible" cols="1">
                                                    <v-icon
                                                        left
                                                    >
                                                        mdi-checkbox-marked-circle
                                                    </v-icon>
                                                </v-col>
                                                <v-col>
                                                    {{i+1}}. {{ing.name}}
                                                </v-col>
                                            </v-row>
                                            <v-row>
<!--                                                <v-col v-if="result.status === 2">
                                                    <v-btn
                                                        x-small
                                                        @click="ing.pivot.is_visible ? hideIngredient(ing.id) : showIngredient(ing.id)"
                                                    >{{ing.pivot.is_visible ? 'не показывать' : 'показывать'}}</v-btn>
                                                </v-col>-->
                                                <v-col v-if="ing.pivot.editable">
                                                    <v-btn x-small @click="removeExtra(ing.id)">убрать</v-btn>
                                                </v-col>
                                            </v-row>
                                        </v-sheet>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-row>

        <!-- Замена -->
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
                                v-if="ingredient_categories.length > 0"
                                v-model="chosen_category"
                                :items="ingredient_categories"
                                label="Категории"
                                item-text="name"
                                return-object
                                outlined
                                clearable
                            >
                            </v-select>
                            <v-autocomplete
                                v-model="r1_val"
                                :items="ingredients"
                                item-text="name"
                                item-value="id"
                                clearable
                                outlined
                                label="Ингредиенты"
                                @change="r1"
                            ></v-autocomplete>
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

        <!-- Редактировать название и описание блюда -->
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
                        @click="dialog3=false"
                    >
                        Закрыть
                    </v-btn>
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
    import SelectModal from "./SelectModal";
    export default {
        name: 'Select',
        components: {SelectModal},
        data: () => ({
            amo_loading: false,
            orders: [],
            order: {},
            select_stat: [],
            itemsPerPage: 300,
            search: '',
            headers: [
                { text: '#', value: 'index' },
                { text: 'Имя', value: 'name' },
                { text: 'Тэг', value: 'tag' }
            ],
            loading: true,
            select_loading: false,
            dialog: false,
            dialog2: false,
            dialog3: false,
            ingredients: [],
            categories: [],
            dishes: [],
            dish: {},
            rations: [],
            select_previous: [],
            select_result: [],
            previous: {},
            result: {},
            blacklist: [],
            mix: [],
            wishlist: [],
            wish_ids: [],
            tag: '',
            tags: [],
            cuisine: {},
            ration: {},
            applied_categories: [],
            ration_id: null,
            ingredient_categories: [],
            chosen_category: {},
            chosen_ingredient: {},
            target_ingredient: null,
            errors: [],
            r1_val: null,
            r2_val: null
        }),
        created() {
            this.getOrders()
            this.getCuisine()
            this.getCategories()
            this.getIngredients()
            this.getRations()
        },
        computed: {
            isDutyDishId() {
                return this.dishes[0].id === this.dish.id
            }
        },
        methods: {
            async fetchOrdersFromAmo() {
                this.amo_loading = true
                await axios
                    .get('/api/orders/eat-fit')
                    .then(() => {
                        this.getOrders()
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
            async getOrders() {
                this.loading = true
                await axios
                    .get('/api/orders/select')
                    .then(response => {
                        this.orders = response.data.orders
                        this.select_stat = response.data.stat
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
            showOrderDetails(order){
                this.order = order
                this.getSelectDetailsByOrder(order.id)
            },
            async getSelectDetailsByOrder(id){
                this.select_loading = true
                await axios
                    .get('/api/select/order/'+id)
                    .then(response => {
                        this.select_previous = response.data.previous
                        this.select_result = response.data.result
                        this.blacklist = response.data.blacklist
                        this.mix = response.data.blacklist
                        this.wishlist = response.data.wishlist
                        this.select_loading = false
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            openSettings(ration){
                this.ration = ration
                this.ration_id = ration.iiko_id
                this.previous = this.select_previous.find(obj => obj.ration.id === ration.id) ?? {}
                this.result = this.select_result.find(obj => obj.ration.id === ration.id) ?? {}
                this.wish_ids = this.result.wishes
                this.getDishesByRation(this.ration.iiko_id)
                this.dialog = true
            },
            activateDeactivate(id){
                axios
                    .post('/api/select/activate-deactivate', {
                        select_id: id
                    })
                    .then(response => {
                        this.getSelectDetailsByOrder(this.order.id)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            applyCategories(){
                let ings = this.applied_categories.map(item => {
                    let category = this.categories.find(obj => {
                        return obj.id === item
                    })
                    return category.ingredient_ids
                })
                ings = ings.flat()
                ings = ings.concat(this.blacklist)
                this.mix = [...new Set(ings)]
            },
            removeIngredientFromBlacklist(id) {
                this.mix = this.mix.filter(function(item) {
                    return item !== id
                })
            },
            saveBlacklist(){
                axios
                    .post('/api/blacklist', {
                        id: this.order.id,
                        blacklist: this.mix
                    })
                    .then(response => {
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
            addTag() {
                axios
                    .post('/api/wishlist', {
                        id: this.order.id,
                        tag: this.tag
                    })
                    .then(response => {
                        this.getSelectDetailsByOrder(this.order.id)
                        this.tag = ''
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
                        tag: tag.wish
                    })
                    .then(response => {
                        this.wishlist = this.wishlist.filter(item => item !== tag)
                        this.getSelectDetailsByOrder(this.order.id)

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
            addWishToSelect(id) {
                if(Object.keys(this.result).length === 0) return

                axios
                    .post('/api/select/wish', {
                        s_id: this.result.id,
                        w_id: id
                    })
                    .then(response => {
                        this.wish_ids = response.data.data
                        this.getSelectDetailsByOrder(this.order.id)
                    })
                    .catch(error => {
                        this.errors = error.response.data.errors
                    })
            },
            hasResultIncludeIngredient(id){
                if (!this.result.ingredient_ids) return
                return this.result.ingredient_ids.includes(id)
            },
            async getDishesByRation(id){
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
            setDish() {
                axios
                    .post('/api/select/add/dish', {
                        select_id: this.result.id,
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
                        this.getSelectDetailsByOrder(this.order.id)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            getAnalogName(id){
                return this.result.ingredients.find(obj => obj.pivot.analog_id === id).name
            },
            hasAnalog(id){
                if (!this.result.ingredient_ids) return
                let index = this.result.ingredients.findIndex(obj => obj.pivot.analog_id === id)
                return index >= 0
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
                        this.getSelectDetailsByOrder(this.order.id)
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
                        this.getSelectDetailsByOrder(this.order.id)
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
            getAnalogId(id){
                return this.result.ingredients.find(obj => obj.pivot.analog_id === id).id
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
                            this.getSelectDetailsByOrder(this.order.id)
                            this.closeDialog2()
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            returnIngredient(target_id){
                axios
                    .post('/api/select/return/ingredient', {
                        select_id: this.result.id,
                        ingredient_id: target_id,
                        analog_id: this.getAnalogId(target_id)
                    })
                    .then(response => {
                        if (response.data.status){
                            this.result = response.data.select
                            this.getSelectDetailsByOrder(this.order.id)
                        }
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
            getSelectColor(id){
                if (this.select_result.length > 0){
                    let select = this.select_result.find(x => x.ration_id === id)
                    return select ? select.color : ''
                }

                return '';
            },
            isActive(id){
                if (this.select_result.length > 0){
                    let select = this.select_result.find(x => x.ration_id === id)
                    return select ? select.is_active : true
                }

                return true;
            },
            getSelectName(id){
                if (this.select_result.length > 0){
                    let select = this.select_result.find(x => x.ration_id === id)
                    return select ? select.dish_name : ''
                }

                return '';
            },
            closeDialog(){
                this.dish = {}
                this.dialog = false
                this.getSelectDetailsByOrder(this.order.id)
            },
            closeDialog2(){
                this.ingredient_categories = []
                this.chosen_category = {}
                this.chosen_ingredient = {}
                this.target_ingredient = null
                this.r1_val = null
                this.dialog2 = false
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
            exportExcel(){},
            r1(){
                this.replaceIngredient(this.r1_val)
            },
            addExtra(id){
                if (!id) return
                axios
                    .post('/api/select/add/extra', {
                        select_id: this.result.id,
                        ingredient_id: id
                    })
                    .then(response => {
                        this.result = response.data.data
                        this.getSelectDetailsByOrder(this.order.id)
                        this.r2_val = null
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            removeExtra(id){
                axios
                    .post('/api/select/remove/extra', {
                        select_id: this.result.id,
                        ingredient_id: id
                    })
                    .then(response => {
                        this.result = response.data.data
                        this.getSelectDetailsByOrder(this.order.id)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            showIngredient(id){
                axios
                    .post('/api/select/show/ingredient', {
                        select_id: this.result.id,
                        ingredient_id: id
                    })
                    .then(response => {
                        this.result = response.data.data

                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            hideIngredient(id){
                axios
                    .post('/api/select/hide/ingredient', {
                        select_id: this.result.id,
                        ingredient_id: id
                    })
                    .then(response => {
                        this.result = response.data.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        }
    }
</script>
