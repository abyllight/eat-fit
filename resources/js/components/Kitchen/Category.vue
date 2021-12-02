<template>
    <div>
        <v-row>
            <v-col>
                <v-btn
                    color="primary"
                    @click="dialog=true"
                >
                    Добавить категорию
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="8">
                <v-simple-table>
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
                                Ингредиенты
                            </th>
                            <th class="text-left">
                                Действие
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr
                            v-for="(item, index) in categories"
                            :key="item.id"
                        >
                            <td>{{ index + 1 }}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.ingredients.length }}</td>
                            <td>
                                <v-icon
                                    small
                                    class="mr-2"
                                    @click="editItem(item)"
                                >
                                    mdi-pencil
                                </v-icon>
                                <v-icon
                                    small
                                    @click="deleteItem(item)"
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
                        <v-toolbar-title>Категория</v-toolbar-title>
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
                                        v-model="category.name"
                                        label="Название"
                                        :error-messages="errors.name"
                                        outlined
                                        dense
                                        clearable
                                    ></v-text-field>
                                    <v-textarea
                                        v-model="category.description"
                                        outlined
                                        clearable
                                        label="Доп. инфо"
                                    ></v-textarea>
                                </v-col>
                                <v-col sm="12" lg="8">
                                    <v-autocomplete
                                        v-model="category.ingredient_ids"
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
    name: "Category",
    data: () => ({
        categories: [],
        ingredients: [],
        category: {
            name: '',
            description: '',
            ingredient_ids: []
        },
        errors: [],
        edit: -1,
        dialog: false,
        dialogDelete: false,
    }),
    mounted() {
        this.getCategories()
        this.getIngredients()
    },
    methods: {
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
        action(){
            if (this.edit === 1){
                this.update()
            }else{
                this.store()
            }
        },
        store(){
            axios
                .post('/api/categories', this.category)
                .then(response => {
                    if(response.data.status){
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.msg,
                            'color': 'green',
                            'type': 'success'
                        })
                        this.close()
                        this.getCategories()
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
                .patch('/api/categories/'+this.category.id, this.category)
                .then(response => {
                    if(response.data.status){
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.msg,
                            'color': 'green',
                            'type': 'success'
                        })
                        this.close()
                        this.getCategories()
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
            this.category = {
                name: '',
                description: '',
                ingredient_ids: []
            }
        },
        editItem(category){
            this.edit = 1
            this.category = category
            this.dialog = true
        },
        deleteItem(category){
            this.category = category
            this.dialogDelete = true
        },
        deleteConfirm(){
            axios
                .delete('/api/categories/'+this.category.id)
                .then(response => {
                    if(response.data.status){
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.msg,
                            'color': 'green',
                            'type': 'success'
                        })
                        this.close()
                        this.getCategories()
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
