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
            <v-col sm="12" md="2">
                <v-simple-table dense>
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-left">
                                    #
                                </th>
                                <th class="text-left">
                                    Name
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(cuisine, index) in cuisines"
                                :key="cuisine.id"
                                :class="cuisine.active ? 'light-green lighten-3': ''"
                                @click="showDetails(cuisine)"
                            >
                                <td>{{ index + 1 }}</td>
                                <td>{{ cuisine.name }}</td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-col>
            <v-col sm="12" md="10" lg="6">
                <v-card
                    :color="cuisine.active ? 'light-green lighten-3' : 'light-blue lighten-3'"
                    :disabled="disabled"
                    :loading="disabled"
                >
                    <v-card-title>{{ cuisine.name }}</v-card-title>
                    <v-card-actions>
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
                    </v-card-actions>
                </v-card>
                <v-card
                    class="mt-4"
                    :disabled="disabled"
                    :loading="loading"
                >
                    <v-list>
                        <v-list-item
                            v-for="(dish, index) in cuisine.dishes"
                            :key="dish.id"
                            @click="setDish(dish)"
                        >
                            <v-list-item-content>
                                <v-list-item-title>{{index+1}}. {{dish.name}}</v-list-item-title>
                                <v-list-item-subtitle>[{{dish.ration}}] {{dish.i_name}}</v-list-item-subtitle>
                            </v-list-item-content>

                            <v-list-item-action>
                                <v-btn @click="editDish(dish)" icon>
                                    <v-icon color="grey lighten-1">mdi-pencil</v-icon>
                                </v-btn>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-col>
            <v-col sm="12" lg="4">
                <v-card
                    :disabled="disabled"
                    :loading="loading"
                >
                    <v-card-title>{{ dish.name }}</v-card-title>
                </v-card>
                <v-card
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
                persistent
                max-width="600px"
            >
                <v-card>
                    <v-card-title>
                        <span class="text-h5">Редактировать</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col
                                    cols="12"
                                >
                                    <v-text-field
                                        label="Название"
                                        required
                                        clearable
                                        v-model="name"
                                        :error-messages="errors.name"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="close"
                        >
                            Закрыть
                        </v-btn>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="saveDish"
                        >
                            Сохранить
                        </v-btn>
                    </v-card-actions>
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
            cuisine: {},
            dish: {},
            btn_loading: false,
            loading: false,
            disabled: false,
            dialog: false,
            name: '',
            errors: []
        }),
        mounted() {
            this.getCuisines()
        },
        methods: {
            getCuisines() {
                axios
                    .get('/api/cuisines')
                    .then(response => {
                        this.cuisines = response.data.data

                        if (Object.keys(this.cuisine).length === 0) {
                            this.cuisine = this.cuisines[0]
                        }else {
                            this.cuisine = this.cuisines.find(x => x.id === this.cuisine.id)
                        }

                        this.dish = this.cuisine.dishes[0]

                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            async fetchCuisines() {
                /*this.iiko_loading = true
                await axios
                    .get('/api/webhook')
                    .then(response => {
                        console.log(response)
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    .finally(() => (this.iiko_loading = false))*/
                this.btn_loading = true
                this.disabled = true
                await axios
                    .get('/api/iiko/cuisines')
                    .then(response => {
                        console.log(response)
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
                    .get('/api/iiko/dishes')
                    .then(response => {
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.msg,
                            'color': response.data.status ? 'green' : 'error',
                            'type': response.data.status ? 'success' : 'error',
                        })
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
                    .post('/api/iiko/ingredients', {
                        id: id
                    })
                    .then(response => {
                        this.getCuisines()
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.msg,
                            'color': response.status ? 'green' : 'error',
                            'type': response.status ? 'success' : 'error',
                        })
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    .finally(() => {
                        this.disabled = false
                        this.loading = false
                    })
            },
            showDetails(cuisine) {
                if (this.disabled) return
                this.cuisine = cuisine
                this.dish = cuisine.dishes[0]
            },
            async setCuisine(id){
                await axios
                    .post('/api/cuisine/set', {
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
                this.name = ''
            },
            editDish(dish) {
                this.dish = dish
                this.dialog = true
                this.name = this.dish.name
            },
            saveDish(){
                axios
                    .post('/api/dish/update', {
                        id: this.dish.id,
                        name: this.name
                    })
                    .then(response => {
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.msg,
                            'color': 'green',
                            'type': 'success'
                        })

                        if(response.data.status){
                            this.dialog = false
                            this.name = ''
                            this.getCuisines()
                        }else{
                            this.errors = response.data.errors
                        }
                    })
                    .catch(error => {
                        console.log(error)
                        this.errors = error.response.data.errors
                    })
            }
        }
    }
</script>
