<template>
    <div>
        <v-row>
            <v-col>
                <v-btn
                    color="primary"
                    @click="dialog=true"
                >
                    Добавить блюдо
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-simple-table dense>
                    <template v-slot:default>
                        <thead>
                        <tr>
                            <th class="text-left">
                                #
                            </th>
                            <th class="text-left">
                                Название
                            </th>
                            <th class="text-left">
                                Рацион
                            </th>
                            <th class="text-left">
                                Ингредиенты
                            </th>
                            <th class="text-left">
                                Actions
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr
                            v-for="(dish, index) in dishes"
                            :key="dish.id"
                        >
                            <td>{{ index + 1 }}</td>
                            <td>{{ dish.name }}</td>
                            <td>{{ dish.ration }}</td>
                            <td>{{ dish.ingredients.length }}</td>
                            <td>
                                <v-icon
                                    small
                                    class="mr-2"
                                    @click="editItem(dish)"
                                >
                                    mdi-pencil
                                </v-icon>
                                <v-icon
                                    small
                                    @click="deleteDish(dish)"
                                >
                                    mdi-delete
                                </v-icon></td>
                        </tr>
                        </tbody>
                    </template>
                </v-simple-table>
                <v-dialog v-model="dialogDelete" max-width="500px">
                    <v-card>
                        <v-card-title class="text-h5">Вы уверены?</v-card-title>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="dialogDelete=false">Отмена</v-btn>
                            <v-btn color="blue darken-1" text @click="deleteConfirm">Да</v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
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
                        <v-toolbar-title>Settings</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-toolbar-items>
                            <v-btn
                                dark
                                text
                                @click="addDish"
                            >
                                Сохранить
                            </v-btn>
                        </v-toolbar-items>
                    </v-toolbar>
                    <v-card-title>
                        <span class="text-h5"> {{ edit === 1 ? 'Редактировать' : 'Добавить блюдо' }}</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container fluid>
                            <v-row>
                                <v-col
                                    sm="12"
                                    lg="4"
                                >
                                    <v-text-field
                                        v-model="dish.name"
                                        label="Название"
                                        :error-messages="errors.name"
                                        outlined
                                        dense
                                        clearable
                                    ></v-text-field>
                                    <v-select
                                        :items="rations"
                                        v-model="dish.time"
                                        item-text="name"
                                        item-value="id"
                                        label="Рацион"
                                        :error-messages="errors.time"
                                        dense
                                        clearable
                                        outlined
                                    ></v-select>
                                    <v-textarea
                                        v-model="dish.description"
                                        outlined
                                        clearable
                                        label="Доп. инфо"
                                    ></v-textarea>
                                </v-col>
                                <v-col sm="12" lg="8">
                                    <v-autocomplete
                                        v-model="dish_ings"
                                        :items="ingredients"
                                        item-text="name"
                                        item-value="id"
                                        clearable
                                        outlined
                                        small-chips
                                        label="Ингредиенты"
                                        multiple
                                    ></v-autocomplete>
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
    name: "CustomDishes",
    data: () => ({
        dishes: [],
        dish: {
            name: '',
            time: 0,
            description: '',
            ingredients: []
        },
        ingredients: [],
        rations: [
            {
                id: 1,
                name: 'Завтрак 1'
            },
            {
                id: 2,
                name: 'Завтрак 2'
            },
            {
                id: 3,
                name: 'Обед суп'
            },
            {
                id: 4,
                name: 'Обед основной'
            },
            {
                id: 5,
                name: 'Обед салат'
            },
            {
                id: 6,
                name: 'Полдник'
            },
            {
                id: 7,
                name: 'Ужин'
            }
        ],
        dish_ings: [],
        errors: [],
        edit: -1,
        dialog: false,
        dialogDelete: false,
    }),
    mounted() {
        this.getDishes()
        this.getIngredients()
    },
    methods: {
        async getDishes(){
            await axios
                .get('/api/custom_dishes')
                .then(response => {
                    this.dishes = response.data.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        async getIngredients(){
            await axios
                .get('/api/ingredients')
                .then(response => {
                    this.ingredients = response.data.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        addDish(){
            let link = this.edit === 1 ? '/api/dish/update' : '/api/dish/create'
            this.dish.ingredients = this.dish_ings
            axios
                .post(link, this.dish)
                .then(response => {
                    if(response.data.status){
                        this.close()
                        this.getDishes()
                    }else{
                        this.errors = response.data.errors
                    }

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
        close(){
            this.dialog = false
            this.dialogDelete = false
            this.dish = {
                name: '',
                time: 0,
                description: '',
                ingredients: []
            }
        },
        editItem(dish){
            this.edit = 1
            this.dish = dish
            this.dialog = true
            this.dish_ings = dish.ingredients
        },
        deleteDish(dish){
            this.dish = dish
            this.dialogDelete = true
        },
        deleteConfirm(){
            axios
                .post('/api/dish/delete', {
                    id: this.dish.id
                })
                .then(response => {
                    if(response.data.status){
                        this.close()
                        this.getDishes()
                    }else{
                        this.errors = response.data.errors
                    }

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
        }
    }
}
</script>
