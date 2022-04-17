<template>
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
                        @click="$emit('close')"
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
                                    v-model="blacklist"
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
                                            @click:close="remove(data.item.id)"
                                        >
                                            {{ data.item.name }}
                                        </v-chip>
                                    </template>
                                </v-autocomplete>
                                <v-btn
                                    dark
                                    @click="$emit('save-blacklist')"
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
                                    v-for="(tag) in wishlist"
                                    :key="tag"
                                    class="ma-2"
                                    close
                                    @click:close="removeTag(tag)"
                                >
                                    {{ tag }}
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
                                        :color="blacklist.includes(ing.id) ? 'red lighten-3' : ''"
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
                                                :class="hasResultIncludeIngredient(ing.id) ? 'red white&#45;&#45;text' : 'green'"
                                            >
                                                {{hasResultIncludeIngredient(ing.id) ? 'Убрать' : 'Вернуть'}}
                                            </v-btn>
                                            <v-btn
                                                v-if="hasResultIncludeIngredient(ing.id) || hasAnalog(ing.id)"
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
                        </v-row>

<!--

                        <v-row class="py-3">


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
                                            <v-col v-if="result.status === 2">
                                                <v-btn
                                                    x-small
                                                    @click="ing.pivot.is_visible ? hideIngredient(ing.id) : showIngredient(ing.id)"
                                                >{{ing.pivot.is_visible ? 'не показывать' : 'показывать'}}</v-btn>
                                            </v-col>
                                            <v-col v-if="ing.pivot.editable">
                                                <v-btn x-small @click="removeExtra(ing.id)">убрать</v-btn>

                                            </v-col>
                                        </v-row>
                                    </v-sheet>
                                    <v-autocomplete
                                        v-model="r2_val"
                                        :items="ingredients"
                                        item-text="name"
                                        item-value="id"
                                        clearable
                                        outlined
                                        label="Ингредиенты"
                                        @change="addExtra"
                                    ></v-autocomplete>
                                </div>
                            </v-col>
                        </v-row>-->
                    </v-container>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import axios from "axios";

export default {
    name: "SelectModal",
    props: {
        dialog: Boolean,
        order: Object,
        cuisine: Object,
        ration: Object,
        blacklist: Array,
        wishlist: Array,
        result: Object,
        previous: Object,
        dishes: Array,
        dish: Object
    },
    data: () => ({
        categories: [],
        ingredients: [],
        applied_categories: [],
        errors: [],
        tag: '',
        rations: [],
        ration_id: null
    }),
    created() {
        this.getCategories()
        this.getIngredients()
        this.getRations()
    },
    methods: {
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
        applyCategories(){
            let ingredients = this.applied_categories.map(item => {
                let category = this.categories.find(obj => {
                    return obj.id === item
                })
                return category.ingredient_ids
            })
            ingredients = ingredients.flat()
            ingredients = ingredients.concat(this.blacklist)
            this.$emit('update-blacklist', [...new Set(ingredients)])
        },
        remove(id) {
            let array = this.blacklist.filter(function(item) {
                return item !== id
            })

            this.$emit('update-blacklist', array)
        },
        addTag(){
            axios
                .post('/api/wishlist', {
                    id: this.order.id,
                    tag: this.tag
                })
                .then(response => {
                    this.$emit('add-tag', this.tag)
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
                    tag: tag
                })
                .then(response => {
                    this.$emit('remove-tag', tag)
                    this.tag = ''

                    this.$store.dispatch('showAlert', {
                        'isVisible': true,
                        'msg': response.data.msg,
                        'color': response.data.status ? 'green' : 'error',
                        'type': response.data.status ? 'success' : 'error'
                    })
                })
                .catch(error => {
                    this.errors = error.response.data.errors
                })
        },
        hasResultIncludeIngredient(id){
            if (!this.result.ingredient_ids) return
            return this.result.ingredient_ids.includes(id)
        },
        setDish() {
            axios
                .post('/api/select/add/dish', {
                    select_id: this.result.id,
                    ration_id: this.ration.iiko_id,
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
                    this.$emit('update-result', response.data.data)
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
        hasAnalog(id){
            if (!this.result.ingredient_ids) return
            let index = this.result.ingredients.findIndex(obj => obj.pivot.analog_id === id)
            return index >= 0
        },
        getAnalogId(id){
            return this.result.ingredients.find(obj => obj.pivot.analog_id === id).id
        },
        getAnalogName(id){
            return this.result.ingredients.find(obj => obj.pivot.analog_id === id).name
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
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        },
        getDishesByRation(id) {
            this.$emit('update-dishes', id)
        }
    }
}
</script>
