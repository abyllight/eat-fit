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
                                <v-btn icon @click="editDish(dish.id)">
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
                            @click="addDish(item.id)"
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
    </div>
</template>
<script>
    export default {
        name: 'CuisineDishes',
        props: ['id'],
        data: () => ({
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
            async getAllRations(){
                await axios
                    .get('/api/rations')
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
            editDish(id) {
                this.$router.push({name: 'cuisine_dishes_edit', params: {id: id}})
            },
            addDish(id) {
                this.$router.push({name: 'cuisine_dishes_create', params: {id: this.cuisine.id, r_id: id}})
            }
        }
    }
</script>
