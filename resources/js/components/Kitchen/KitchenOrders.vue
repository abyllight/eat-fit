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
                        <template v-slot:item.tag="{ item }">
                            <span :class="item.diet_color">{{item.tag}}</span>
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
                                        v-for="(ration, key) in rations"
                                        :key="ration.id"
                                        @click="openRation(ration.id)"
                                    >
                                        <v-expansion-panel-header>
                                            {{ration.name}}
                                        </v-expansion-panel-header>
                                        <v-expansion-panel-content>
                                            <v-row>
                                                <v-col
                                                    v-if="yesterday[key]"
                                                    cols="3"
                                                >
                                                    <h4>Вчера</h4>
                                                    <span>{{yesterday[key].cuisine}}</span>
                                                    <v-list v-if="yesterday[key]" dense>
                                                        <v-subheader v-if="yesterday[key].dish">{{yesterday[key].dish.name}}</v-subheader>
                                                        <v-list-item
                                                            v-for="(ing, i) in yesterday[key].ingredients"
                                                            :key="i"
                                                        >
                                                            <v-list-item-content>
                                                                <v-list-item-title>{{i+1}}. {{ing.name}}</v-list-item-title>
                                                            </v-list-item-content>
                                                        </v-list-item>
                                                    </v-list>
                                                </v-col>
                                                <v-col cols="4">
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
                                                        <v-col v-if="result">
                                                            <v-btn
                                                                color="primary"
                                                                small
                                                                @click="setDish"
                                                                :disabled="result.dish && dish.id === result.dish.id"
                                                            >
                                                                Выбрать
                                                            </v-btn>
                                                        </v-col>
                                                    </v-row>
                                                    <div v-if="result">
                                                        <v-sheet
                                                            v-for="(ing, key) in dish.ingredients"
                                                            :key="ing.id"
                                                            elevation="1"
                                                            class="pa-3 mb-3 flex justify-center"
                                                            :color="mix.includes(ing.id) ? 'red lighten-3' : ''"
                                                        >
                                                            <p
                                                                :class="!result.ingredient_ids.includes(ing.id) ? 'text-decoration-line-through' : ''"
                                                            >
                                                                {{key+1}}. {{ing.name}}
                                                            </p>
                                                            <div class="mt-2">
                                                                <v-btn
                                                                    v-if="result && result.dish && dish.id === result.dish.id"
                                                                    x-small
                                                                    @click="result.ingredient_ids.includes(ing.id) ? removeIngredient(ing.id) : addIngredient(ing.id)"
                                                                    :class="result.ingredient_ids.includes(ing.id) ? 'red' : 'green'"
                                                                >
                                                                    {{result.ingredient_ids.includes(ing.id) ? 'Убрать' : 'Вернуть'}}
                                                                </v-btn>
                                                                <v-btn
                                                                    v-if="result && result.dish && dish.id === result.dish.id"
                                                                    x-small
                                                                    @click="replace(ing)"
                                                                >
                                                                    Замена
                                                                </v-btn>
                                                            </div>
                                                        </v-sheet>
                                                    </div>
                                                </v-col>
                                                <v-col v-if="result">
                                                    <h4>Итог</h4>
                                                    <span>{{cuisine.name}}</span>
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
            ingredients: [],
            categories: [],
            applied_categories: [],
            dishes: [],
            dish: {},
            yesterday: [],
            today: [],
            result: [],
            order: {},
            cuisine: {},
            mix: [],
            tag: '',
            tags: [],
            errors: [],
            rations: []
        }),
        mounted() {
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
            async getRations(){
                await axios
                    .get('/api/rations')
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
                            this.dish = this.dishes[0]
                        }else {
                            this.dish.ingredients = []
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            getCuisine(){
                axios
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
            showDetails(index){
                this.order = index
                this.mix = index.blacklist
                this.tags = index.wishlist
                this.yesterday = index.yesterday
                this.today = index.today
                this.dialog = true
            },
            close(){
                this.order = {}
                this.mix = []
                this.dialog = false
                this.applied_categories = []
                this.tag = ''
                this.today = []
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
                this.getDishes(id)
                this.result = this.today[id-1]
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
                    .catch()
            },
            replace(ing){

            },
            addIngredient(id){
                axios
                    .post('/api/select/'+this.result.id+'/add/ingredient/'+id)
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
                    .post('/api/select/'+this.result.id+'/remove/ingredient/'+id)
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
            }
        }
    }
</script>
