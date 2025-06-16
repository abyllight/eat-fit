<template>
    <div>
        <v-btn @click="$router.back()" class="mb-5" color="black" dark>Назад</v-btn>
        <!--  Select Modal   -->
        <v-row>
            <v-col>
                <h3>{{order.name}} - {{ration.name}} - {{order.tag}}</h3>
            </v-col>
        </v-row>

        <diet-description :diet="order.diet" :diet_old="order.diet_old"></diet-description>

        <v-divider class="my-8"></v-divider>

        <!--  Blacklist   -->
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

        <!--  Wishlist   -->
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
                    :key="t.id"
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

        <v-row>
            <v-col>
                <h2 class="mb-2">{{cuisine.name}} - {{ration.name}}</h2>
            </v-col>
        </v-row>

        <v-row class="py-3">

            <!-- Previous   -->
            <v-col
                v-if="previous.length > 0"
                cols="3"
            >
                <h4>Предыдущие селекты</h4>
                <span>{{cuisine.name}}</span>
                <v-select
                    v-model="selected_previous"
                    label="Предыдущие селекты"
                    :items="previous"
                    outlined
                    dense
                    class="mt-5"
                    item-value="id"
                    :item-text="item => item.created_at + ' - ' + '(' + item.cuisine + ')' + item.dish_name"
                    return-object
                ></v-select>

                <v-list dense>
                    <v-list-item
                        v-for="(ing, i) in selected_previous.ingredients"
                        :key="i"
                        :class="hasResultIncludeIngredient(ing.id) ? 'yellow lighten-3' : ''"
                    >
                        <v-list-item-content>
                            <v-list-item-title>{{i+1}}. {{ing.name}}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>

                <v-btn v-if="Object.keys(selected_previous).length > 0"
                       color="primary"
                       @click="choosePrevAsSelect"
                >Выбрать</v-btn>
            </v-col>

            <!-- Today   -->
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
                            item-value="id"
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
                        >
                            <template v-slot:item="{ item, props }">
                                <v-list-item v-bind="props">
                                    <v-list-item-content>
                                        <v-list-item-title>{{ item.name }}</v-list-item-title>
                                        <v-list-item-subtitle>{{ item.cuisine_name }}</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </template>
                        </v-select>
                    </v-col>
                    <v-col cols="3" v-if="dish">
                        <v-btn
                            color="primary"
                            @click="setDish"
                            :disabled="isDisabled"
                        >
                            выбрать
                        </v-btn>
                    </v-col>
                </v-row>
                <div v-if="dish">
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
                        <div v-if="isDisabled" class="mt-2">
                            <v-btn
                                v-if="!hasAnalog(ing.id)"
                                x-small
                                @click="hasResultIncludeIngredient(ing.id) ? removeIngredient(ing.id) : addIngredient(ing.id)"
                                :class="hasResultIncludeIngredient(ing.id) ? 'red white&#45;&#45;text' : 'green'"
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

            <!-- Result   -->
            <v-col cols="4">
                <h4>Итог</h4>
                <span>{{cuisine.name}}</span>
                <div v-if="result">
                    <div class="d-flex mt-3">
                        <v-select
                            v-model="result.dep_id"
                            :items="departments"
                            item-text="name"
                            item-value="id"
                            dense
                            class="mr-3"
                            clearable
                            outlined
                            label="Цех"
                        ></v-select>

                        <v-btn color="primary" @click="saveDep">сохранить</v-btn>
                    </div>
                    <v-card class="mb-5 mt-3" color="blue-grey lighten-3">
                        <v-card-title>{{result.dish_name}}</v-card-title>
                        <v-card-subtitle>{{result.weight ? result.weight + ' грамм' : ''}}</v-card-subtitle>
                        <v-card-text>
                            {{result.description}}
                        </v-card-text>
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
<!--                            <v-col v-if="result.status === 2">
                                <v-btn
                                    x-small
                                    @click="ing.pivot.is_visible ? hideIngredient(ing.id) : showIngredient(ing.id)"
                                >{{ing.pivot.is_visible ? 'не показывать' : 'показывать'}}</v-btn>
                            </v-col>-->
                            <v-col v-if="ing.pivot.is_editable">
                                <v-btn x-small @click="removeExtra(ing.id)">убрать</v-btn>
                            </v-col>
                        </v-row>
                    </v-sheet>
                </div>

                <div class="mt-4">
                    <h5 class="mb-1">Выбрать посуду:</h5>
                    <div class="d-flex">
                        <v-sheet
                            v-for="tw in tablewares"
                            :key="tw.id"
                            rounded
                            class="mr-4 v-alert--border"
                            @click="setTW(tw.id)"
                            style="cursor: pointer;"
                            :style="tw.id === tw_id ? 'border: 3px solid dodgerblue' : ''"
                        >
                            <img :src="/storage/+tw.img" width="64" height="64" class="rounded">
                        </v-sheet>
                    </div>
                </div>
            </v-col>
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

                    <v-text-field
                        v-model="result.weight"
                        type="number"
                        clearable
                        outlined
                        label="Вес(грамм)"
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
    import SelectModal from "../Kitchen/SelectModal";
    import Stat from "./Stat.vue";
    import DietDescription from "./DietDescription.vue";
    import Blacklist from "./Blacklist.vue";
    import dishes from "./Dishes.vue";
    export default {
        name: 'Select',
        props: {
            id: Number,
            r_id: Number
        },
        components: {Blacklist, DietDescription, Stat, SelectModal},
        data: () => ({
            items: [
                {
                    text: 'Селекты',
                    disabled: false,
                    href: '/select',
                },
                {
                    text: 'Детали',
                    disabled: true
                }
            ],
            order: {},
            stat: {},
            loading: true,
            select_loading: false,
            dialog: false,
            dialog2: false,
            dialog3: false,
            ingredients: [],
            categories: [],
            dishes: [],
            dish: {},
            duty_dish_id: null,
            rations: [],
            select_previous: [],
            select_result: [],
            previous: {},
            result: {
                dish_name: ''
            },
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
            tablewares: [],
            errors: [],
            r1_val: null,
            r2_val: null,
            departments: [],
            selected_previous: {}
        }),
        mounted() {
            this.getSelectDetailsByOrder()
            this.getCuisine()
            this.getCategories()
            this.getIngredients()
            this.getDepartments()
            this.getTablewares()
            this.getRations()
            this.getDishesByRation(this.r_id)
        },
        computed: {
            isDutyDishId() {
                return this.dish.id === this.duty_dish_id
            },
            isDisabled() {
                return this.result.dish_id === this.dish.id
            },
            tw_id() {
                return this.result.tableware ? this.result.tableware.id : this.ration.tableware_id
            }
        },
        methods: {
            saveDep() {
                axios.post('/api/select/department', {
                    dep_id: this.result.dep_id,
                    s_id: this.id
                }).then(res => {
                    this.getSelectDetailsByOrder()
                })
            },
            async getDepartments() {
                await axios
                    .get('/api/departments')
                    .then(response => {
                        this.departments = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            async getIngredients() {
                await axios
                    .get('/api/ingredients')
                    .then(response => {
                        this.ingredients = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            async getTablewares(){
                await axios
                    .get('/api/tableware')
                    .then(response => {
                        this.tablewares = response.data.data
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
                        this.ration = this.rations.find(x => x.id === this.r_id)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            async getCuisine(){
                await axios
                    .get('/api/cuisine/duty')
                    .then(response => {
                        this.cuisine = response.data.cuisine
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
            setTW(id){
                axios
                    .post('/api/select/tableware', {
                        order_id: this.order.id,
                        ration_id: this.r_id,
                        dish_id: this.dish.id,
                        cuisine_id: this.cuisine.id,
                        tableware_id: id
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
                        this.getSelectDetailsByOrder()
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            async getSelectDetailsByOrder(){
                await axios
                    .get('/api/select/order/'+this.id)
                    .then(response => {
                        this.order = response.data.order
                        console.log(response)
                        this.previous = response.data.previous
                        this.result = response.data.result
                        this.blacklist = response.data.blacklist
                        this.mix = response.data.blacklist
                        this.wishlist = response.data.wishlist
                        this.wish_ids = Object.keys(this.result).length > 0 ? this.result.selected_wishes : []
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            async getDishesByRation(id){
                this.ration_id = this.r_id
                await axios
                    .get('/api/dishes/ration/'+id)
                    .then(response => {
                        this.dishes = response.data

                        if (this.dishes.length > 0){

                            if (id === this.r_id) {
                                this.duty_dish_id = this.dishes[0].id
                            }

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
                        this.getSelectDetailsByOrder(this.order.id)

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
                axios
                    .post('/api/select/wish', {
                        order_id: this.order.id,
                        ration_id: this.ration_id,
                        cuisine_id: this.cuisine.id,
                        dish_id: this.dish.id,
                        w_id: id
                    })
                    .then(response => {
                        this.wish_ids = response.data.data
                        this.getSelectDetailsByOrder()
                    })
                    .catch(error => {
                        this.errors = error.response.data.errors
                    })
            },
            hasResultIncludeIngredient(id) {
                if (Object.keys(this.result).length === 0) return true
                return this.result.ingredient_ids.includes(id)
            },
            setDish() {
                axios
                    .post('/api/select/add/dish', {
                        id: this.id,
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
                        this.getSelectDetailsByOrder()
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            getAnalogName(id){
                return this.result.ingredients.find(obj => obj.pivot.analog_id === id).name
            },
            hasAnalog(id){
                if (!this.result.ingredient_ids) return false
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
                        order_id: this.order.id,
                        ration_id: this.r_id,
                        cuisine_id: this.cuisine.id,
                        dish_id: this.dish.id,
                        ingredient_id: id,
                        is_extra: this.result.is_extra
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
                        order_id: this.order.id,
                        ration_id: this.r_id,
                        cuisine_id: this.cuisine.id,
                        dish_id: this.dish.id,
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
            getSelectColor(order, r_id){
                let select = order.result.find(x => x.r_id === r_id)
                return select ? select.color : 'lime lighten-2'
            },
            isActive(order, r_id){
                let select = order.result.find(x => x.r_id === r_id)
                return select ? select.is_active : true
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
            },
            choosePrev(item) {
                this.selected_previous = item
            },
            choosePrevAsSelect() {
                axios
                    .post('/api/select/copy', {
                        id: this.id,
                        prev_id: this.selected_previous.id
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
                        this.getSelectDetailsByOrder()
                    })
                    .catch(error => {
                        console.log(error)
                    })
                console.log(this.selected_previous)
            }
        }
    }
</script>
