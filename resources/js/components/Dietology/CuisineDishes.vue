<template>
    <div>
        <v-row>
            <v-col>
                <v-btn
                    @click="$router.back()"
                >
                    Назад к кухням мира
                </v-btn>
            </v-col>
        </v-row>

        <!--  Cuisine Dish cards -->
        <v-row>
            <v-col sm="12" md="6">
                <!-- Cuisine name and controls -->
                <v-card
                    :loading="loading"
                    :disabled="disabled"
                    class="blue-grey lighten-4"
                >
                    <v-card-title>{{ cuisine.name }}</v-card-title>
                    <v-card-actions>
                        <v-btn
                            text
                            @click="fetchDishesByCuisineId(cuisine.id)"
                        >
                            <v-icon
                                dark
                                left
                            >
                                mdi-refresh
                            </v-icon>
                            Получить блюда
                        </v-btn>

                        <v-btn
                            text
                            @click="fetchIngredientsByCuisine"
                        >
                            <v-icon
                                dark
                                left
                            >
                                mdi-refresh
                            </v-icon>
                            Получить ингредиенты
                        </v-btn>
                    </v-card-actions>
                </v-card>

                <!--  Dish list -->
                <v-card
                    v-if="dishes.length > 0"
                    class="mt-4"
                    :disabled="disabled"
                >
                    <v-list>
                        <v-list-item
                            v-for="(dish, index) in dishes"
                            :key="dish.id"
                            @click="setDish(dish)"
                        >
                            <v-list-item-content>
                                <v-list-item-title>{{index+1}}. {{dish.name}}</v-list-item-title>
                                <v-list-item-subtitle v-if="dish.ration">
                                    <span class="font-weight-bold">[{{dish.ration.name}}] {{dish.i_name}}</span>
                                </v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-btn icon @click="editDish(dish)">
                                    <v-icon color="grey lighten-1">mdi-pencil</v-icon>
                                </v-btn>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list>
                </v-card>

                <!--  Left rations -->
                <v-card
                    v-for="item in left_rations"
                    :key="item.id"
                    class="mt-4"
                    :disabled="disabled"
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

            <v-col v-if="dish" sm="12" md="6">
                <v-card
                    :disabled="disabled"
                    :loading="loading"
                >
                    <v-card-title>{{ dish.name }}</v-card-title>
                </v-card>
                <v-card
                    v-if="dish.ingredients.length > 0"
                    class="mt-4"
                    :disabled="disabled"
                >
                    <v-list>
                        <v-list-item
                            v-for="(ing, index) in dish.ingredients"
                            :key="ing.id"
                        >
                            <v-list-item-content>
                                <v-list-item-title>
                                    <strong>{{index+1}}.</strong> {{ing.name}}
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-col>
        </v-row>

        <!--  Modal -->
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
                                        :class="!dish.ingredient_ids.includes(item.id) ? 'yellow lighten-3' : ''"
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
                                    <v-select
                                        v-model="dish.ration_id"
                                        :items="all_rations"
                                        dense
                                        item-text="name"
                                        item-value="iiko_id"
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
        name: 'CuisineDishes',
        props: ['id'],
        data: () => ({
            ingredients: [],
            departments: [],
            left_rations: [],
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
            loading: false,
            disabled: false,
            dialog: false,
            dialogSm: false,
            errors: [],
            targetDish: {}
        }),
        mounted() {
            this.getCuisine()
            //this.getIngredients()
            this.getDepartments()
            this.getAllRations()
        },
        methods: {
            async getCuisine() {
                await axios
                    .get('/api/cuisines/'+this.id)
                    .then(response => {
                        this.cuisine = response.data.data
                        this.dishes = this.cuisine.dishes
                        this.dish = this.dishes[0]
                        this.left_rations = this.cuisine.left_rations
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
            async fetchDishesByCuisineId(id) {
                this.disabled = true
                this.loading = true

                await axios
                    .get('/api/dishes/iiko/cuisine/'+id)
                    .then(response => {
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.msg,
                            'color': response.data.status ? 'green' : 'error',
                            'type': response.data.status ? 'success' : 'error',
                        })
                        this.getCuisine()
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    .finally(() => {
                        this.disabled = false
                        this.loading = false
                    })
            },
            async fetchIngredientsByCuisine() {
                this.disabled = true
                this.loading = true
                await axios
                    .get('/api/ingredients/iiko/'+this.id)
                    .then(response => {
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.msg,
                            'color': response.status ? 'green' : 'error',
                            'type': response.status ? 'success' : 'error',
                        })
                        this.getCuisine()
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    .finally(() => {
                        this.disabled = false
                        this.loading = false
                    })
            },
            setDish(dish) {
                this.dish = dish
            },
            close(){
                this.dialog = false
                this.dialogSm = false
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
                this.ingredients = []
                this.targetDish = {}
            },
            editOfficialDish(dish) {
                this.dish = dish
                this.dialogSm = true
            },
            editDish(dish) {
                this.dish = dish
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
                            this.getCuisine()
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
                            this.getCuisine()
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
                    ration_id: ration.iiko_id,
                    code: '',
                    department_id: 0,
                    ingredients: [],
                    is_custom: false,
                    ration: ration
                }
                this.dialog = true
            },
            updateOfficialDish() {
                axios.patch('/api/dishes/'+this.dish.id, this.dish)
                    .then(res => {
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': res.data.msg,
                            'color': 'green',
                            'type': 'success'
                        })

                        this.close()
                        this.getCuisine()
                    }).catch(err => {
                        this.errors = err.response.data.errors
                    })
            }
        }
    }
</script>
