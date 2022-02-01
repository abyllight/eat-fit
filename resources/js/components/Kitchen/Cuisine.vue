<template>
    <div>
        <v-row>
            <v-btn
                class="ma-3"
                :loading="btn_loading"
                :disabled="disabled"
                color="primary"
                @click="fetchCuisines"
            >
                Получить Кухни
            </v-btn>

            <v-btn
                class="ma-3"
                :loading="btn_loading"
                :disabled="disabled"
                color="primary"
                @click="fetchDishes"
            >
                Получить Блюда
            </v-btn>
        </v-row>
        <v-row>
            <v-col>
                <v-chip
                    v-for="(c, key) in cuisines"
                    :key="key"
                    class="ma-1"
                    :class="c.duty ? 'green': ''"
                    :disabled="disabled"
                    @click="showDetails(c)"
                    small
                    dark
                >
                    {{key+1}}. {{c.name}}
                </v-chip>
            </v-col>
        </v-row>
        <v-row>
            <v-col sm="12" md="6">
                <v-card
                    v-if="cuisine"
                    :color="cuisine.duty ? 'light-green lighten-3' : 'light-blue lighten-3'"
                    :disabled="disabled"
                    :loading="disabled"
                >
                    <v-card-title>{{ cuisine.name }}</v-card-title>
                    <v-card-actions>
                        <v-btn
                            text
                            @click="setCuisine(cuisine.id)"
                        >
                            <v-icon
                                dark
                                left
                            >
                                mdi-checkbox-marked-circle
                            </v-icon>
                            Назначить
                        </v-btn>
                        <v-btn
                            text
                            @click="fetchIngredients(cuisine.id)"
                        >
                            <v-icon
                                dark
                                left
                            >
                                mdi-silverware
                            </v-icon>
                            Получить Ингредиенты
                        </v-btn>
                    </v-card-actions>
                </v-card>
                <v-card
                    class="mt-4"
                    :disabled="disabled"
                    :loading="loading"
                >
                    <v-list v-if="cuisine">
                        <v-list-item
                            v-for="(dish, index) in dishes"
                            :key="dish.id"
                            @click="setDish(dish)"
                        >
                            <v-list-item-content>
                                <v-list-item-title>{{index+1}}. {{dish.name}}</v-list-item-title>
                                <v-list-item-subtitle v-if="dish.ration"><span class="font-weight-bold">[{{dish.ration.name}}] {{dish.i_name}}</span></v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-btn icon @click="editDish(dish)">
                                    <v-icon color="grey lighten-1">mdi-pencil</v-icon>
                                </v-btn>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list>
                </v-card>
                <v-card
                    v-for="item in rations"
                    :key="item.id"
                    class="mt-4"
                >
                    <v-card-title>{{item.name}}</v-card-title>
                    <v-card-actions>
                        <v-btn
                            text
                            rounded
                            outlined
                            @click="addDish(item)"
                        >
                            Добавить
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col sm="12" md="6">
                <v-card
                    v-if="dish"
                    :disabled="disabled"
                    :loading="loading"
                >
                    <v-card-title>{{ dish.name }}</v-card-title>
                </v-card>
                <v-card
                    v-if="dish"
                    class="mt-4"
                    :disabled="disabled"
                    :loading="loading"
                >
                    <v-list>
                        <v-list-item
                            v-for="(ing, index) in dish.ingredients"
                            :key="ing.id"
                        >
                            <v-list-item-content>
                                <v-list-item-title>{{index+1}}. {{ing.name}}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
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
                        <v-toolbar-title>Блюдо</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-container fluid>
                            <v-row v-if="dish">
                                <v-col
                                    v-if="dish.i_name"
                                    sm="12"
                                    lg="4"
                                >
                                    <h3>{{dish.i_name}}</h3>
                                    <v-list-item
                                        v-for="(item, key) in dish.i_ingredients"
                                        :key="item.id"
                                        dense
                                    >
                                        <v-list-item-content>
                                            <v-list-item-title>{{key+1}}. {{item.name}}</v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-col>
                                <v-col
                                    sm="12"
                                    lg="8"
                                >
                                    <h2 class="mb-5">{{dish.ration ? dish.ration.name : ''}}</h2>
                                    <v-text-field
                                        v-model="dish.name"
                                        label="Название"
                                        :error-messages="errors.name"
                                        outlined
                                        dense
                                        clearable
                                    ></v-text-field>
                                    <v-text-field
                                        v-model="dish.code"
                                        label="Код"
                                        :error-messages="errors.code"
                                        outlined
                                        dense
                                        clearable
                                    ></v-text-field>
                                    <v-select
                                        v-model="dish.ration_id"
                                        :items="all_rations"
                                        dense
                                        item-text="name"
                                        item-value="id"
                                        outlined
                                        label="Рационы"
                                    ></v-select>
                                    <v-autocomplete
                                        v-model="dish.department_id"
                                        :items="departments"
                                        item-text="name"
                                        item-value="id"
                                        clearable
                                        outlined
                                        label="Цех"
                                        :error-messages="errors.department_id"
                                    ></v-autocomplete>
                                    <v-autocomplete
                                        v-model="dish.ingredient_ids"
                                        :items="ingredients"
                                        item-text="name"
                                        item-value="id"
                                        clearable
                                        outlined
                                        small-chips
                                        label="Ингредиенты"
                                        :error-messages="errors.ingredient_ids"
                                        multiple
                                    ></v-autocomplete>
                                    <v-btn
                                        color="primary"
                                        @click="save"
                                    >
                                        Сохранить
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>
<script>
    export default {
        name: 'Cuisine',
        data: () => ({
            cuisines: [],
            ingredients: [],
            departments: [],
            rations: [],
            all_rations: [],
            cuisine: {},
            dish: {
                name: '',
                cuisine_id: 0,
                ration_id: 0,
                code: '',
                department_id: 0,
                ingredients: [],
                is_custom: false
            },
            dishes: [],
            btn_loading: false,
            loading: false,
            disabled: false,
            dialog: false,
            errors: []
        }),
        created() {
            this.getCuisines()
            this.getIngredients()
            this.getDepartments()
            this.getAllRations()
        },
        methods: {
            async getCuisines() {
                await axios
                    .get('/api/cuisines')
                    .then(response => {
                        this.cuisines = response.data
                        this.cuisine = this.cuisines.find(obj => {
                            return obj.duty === 1
                        })
                        this.getDishesByCuisine(this.cuisine.id)
                        this.getRations()
                    })
                    .catch(error => {
                        console.log(error)
                    })
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
            async getDepartments(){
                await axios
                    .get('/api/departments')
                    .then(response => {
                        this.departments = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            async getAllRations(){
                await axios
                    .get('/api/rations/required')
                    .then(response => {
                        this.all_rations = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            getRations(){
                axios
                    .get('/api/rations/required/'+this.cuisine.id)
                    .then(response => {
                        this.rations = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            async fetchCuisines() {
                this.btn_loading = true
                this.disabled = true
                await axios
                    .get('/api/cuisines/iiko')
                    .then(response => {
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.msg,
                            'color': response.data.status ? 'green' : 'error',
                            'type': response.data.status ? 'success' : 'error',
                        })
                        this.getCuisines()
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    .finally(() => {
                        this.btn_loading = false
                        this.disabled = false
                    })
            },
            async fetchDishes() {
                this.btn_loading = true
                this.disabled = true
                await axios
                    .get('/api/dishes/iiko')
                    .then(response => {
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.msg,
                            'color': response.data.status ? 'green' : 'error',
                            'type': response.data.status ? 'success' : 'error',
                        })
                        this.getCuisines()
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    .finally(() => {
                        this.btn_loading = false
                        this.disabled = false
                    })
            },
            async fetchIngredients(id) {
                this.disabled = true
                this.loading = true
                await axios
                    .get('/api/ingredients/iiko/'+id)
                    .then(response => {
                        console.log(response)
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.msg,
                            'color': response.status ? 'green' : 'error',
                            'type': response.status ? 'success' : 'error',
                        })
                        this.getCuisines()
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    .finally(() => {
                        this.disabled = false
                        this.loading = false
                    })
            },
            async getDishesByCuisine(id){
                await axios
                    .get('/api/dishes/cuisine/'+id)
                    .then(response => {
                        this.dishes = response.data
                        this.dish = this.dishes[0]
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            showDetails(cuisine) {
                if (this.disabled) return
                this.cuisine = cuisine
                this.getDishesByCuisine(cuisine.id)
                this.getRations()
            },
            async setCuisine(id){
                await axios
                    .post('/api/cuisine/duty', {
                        id: id
                    })
                    .then(response => {
                        this.cuisine = response.data
                        this.getCuisines()

                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.name,
                            'color': 'green',
                            'type': 'success'
                        })
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            setDish(dish) {
                this.dish = dish
            },
            close(){
                this.dialog = false
                this.dish = {
                    id: null,
                    name: '',
                    cuisine_id: 0,
                    ration_id: 0,
                    code: '',
                    department_id: null,
                    ingredients: [],
                    is_custom: false
                }
            },
            editDish(dish) {
                this.dish = dish
                this.dish.cuisine_id = this.cuisine.id
                this.dialog = true
            },
            save(){
               if (this.dish.id === null) {
                   this.create()
               }else{
                   this.update()
               }
            },
            update(){
                axios
                    .patch('/api/dishes/'+this.dish.id, this.dish)
                    .then(response => {
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.msg,
                            'color': 'green',
                            'type': 'success'
                        })

                        if(response.data.status){
                            this.dialog = false
                            this.getCuisines()
                        }else{
                            this.errors = response.data.errors
                        }
                    })
                    .catch(error => {
                        console.log(error)
                        this.errors = error.response.data.errors
                    })
            },
            create(){
                axios
                    .post('/api/dishes', this.dish)
                    .then(response => {
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.msg,
                            'color': 'green',
                            'type': 'success'
                        })

                        if(response.data.status){
                            this.dialog = false
                            this.getCuisines()
                        }else{
                            this.errors = response.data.errors
                        }
                    })
                    .catch(error => {
                        console.log(error)
                        this.errors = error.response.data.errors
                    })
            },
            addDish(ration){
                this.dish = {
                    id: null,
                    name: '',
                    cuisine_id: this.cuisine.id,
                    ration_id: ration.id,
                    code: '',
                    department_id: 0,
                    ingredients: [],
                    is_custom: false,
                    ration: ration
                }
                this.dialog = true
            }
        }
    }
</script>
