<template>
    <div>
        <v-row>
            <v-col>
                <v-btn
                    color="primary"
                    @click="dialog=true"
                >
                    Добавить ингредиент
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
                                Категории
                            </th>
                            <th class="text-left">
                                Actions
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr
                            v-for="(ing, index) in ingredients"
                            :key="ing.id"
                        >
                            <td>{{ index + 1 }}</td>
                            <td>{{ ing.name }}</td>
                            <td>{{ ing.categories.length }}</td>
                            <td>
                                <v-icon
                                    small
                                    class="mr-2"
                                    @click="editItem(ing)"
                                >
                                    mdi-pencil
                                </v-icon>
                                <v-icon
                                    v-if="ing.is_custom"
                                    small
                                    @click="deleteIngredient(ing)"
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
                        <v-toolbar-title>Ингредиент</v-toolbar-title>
                    </v-toolbar>
                    <v-card-title>
                        <span class="text-h5"> {{ edit === 1 ? 'Редактировать' : 'Добавить' }}</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container fluid>
                            <v-row>
                                <v-col
                                    sm="12"
                                    lg="4"
                                >
                                    <v-text-field
                                        v-model="ingredient.name"
                                        label="Название"
                                        :error-messages="errors.name"
                                        outlined
                                        clearable
                                    ></v-text-field>
                                    <v-autocomplete
                                        v-model="ingredient.category_ids"
                                        :items="categories"
                                        item-text="name"
                                        item-value="id"
                                        clearable
                                        outlined
                                        label="Категории"
                                        multiple
                                    ></v-autocomplete>
                                    <v-textarea
                                        v-model="ingredient.description"
                                        outlined
                                        clearable
                                        label="Доп. инфо"
                                    ></v-textarea>

                                    <v-btn
                                        color="primary"
                                        @click="action"
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
    name: "Ingredients",
    data: () => ({
        ingredients: [],
        categories: [],
        ingredient: {
            name: '',
            description: '',
            category_ids: []
        },
        errors: [],
        edit: -1,
        dialog: false,
        dialogDelete: false,
    }),
    mounted() {
        this.getIngredients()
        this.getCategories()
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
        action(){
            if (this.edit === 1){
                this.update()
            }else{
                this.store()
            }
        },
        store(){
            axios
                .post('/api/ingredients', this.ingredient)
                .then(response => {
                    if(response.data.status){
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.msg,
                            'color': 'green',
                            'type': 'success'
                        })
                        this.close()
                        this.getIngredients()
                    }else{
                        this.errors = response.data.errors
                    }
                })
                .catch(error => {
                    console.log(error)
                    this.errors = error.response.data.errors
                })
        },
        update(){
            axios
                .patch('/api/ingredients/'+this.ingredient.id, this.ingredient)
                .then(response => {
                    if(response.data.status){
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.msg,
                            'color': 'green',
                            'type': 'success'
                        })
                        this.close()
                        this.getIngredients()
                    }else{
                        this.errors = response.data.errors
                    }
                })
                .catch(error => {
                    console.log(error)
                    this.errors = error.response.data.errors
                })
        },
        close(){
            this.dialog = false
            this.dialogDelete = false
            this.edit = -1
            this.ingredient = {
                name: '',
                description: ''
            }
        },
        editItem(ingredient){
            this.edit = 1
            this.ingredient = ingredient
            this.dialog = true
        },
        deleteIngredient(ingredient){
            this.ingredient = ingredient
            this.dialogDelete = true
        },
        deleteConfirm(){
            axios
                .delete('/api/ingredients/'+this.ingredient.id)
                .then(response => {
                    if(response.data.status){
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.msg,
                            'color': 'green',
                            'type': 'success'
                        })
                        this.close()
                        this.getIngredients()
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
