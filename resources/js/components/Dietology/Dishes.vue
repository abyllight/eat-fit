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
            <v-col>
                <v-text-field
                    v-model="filter.name"
                    outlined
                    label="Название"
                    @change="getDishes"
                ></v-text-field>
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
                            <td>{{ dish.ration ? dish.ration.name : '' }}</td>
                            <td>{{ dish.ingredient_ids.length }}</td>
                            <td>
                                <v-icon
                                    small
                                    class="mr-2"
                                    @click="editItem(dish)"
                                >
                                    mdi-pencil
                                </v-icon>
                            </td>
                        </tr>
                        </tbody>
                    </template>
                </v-simple-table>

                <div class="mt-8">
                    <v-pagination
                        @input="changePage"
                        v-model="filter.page"
                        :length="total"
                        :total-visible="10"
                    ></v-pagination>
                </div>
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
                    <v-card-title>
                        <span class="text-h5"> {{ edit === 1 ? 'Редактировать' : 'Добавить' }}</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container fluid>
                            <v-row>
                                <v-col
                                    sm="12"
                                    lg="6"
                                >
                                    <v-text-field
                                        v-model="dish.name"
                                        label="Название"
                                        :error-messages="errors.name"
                                        outlined
                                        clearable
                                    ></v-text-field>
                                    <v-select
                                        :items="rations"
                                        v-model="dish.ration_id"
                                        item-text="name"
                                        item-value="id"
                                        label="Рацион"
                                        :error-messages="errors.ration_id"
                                        clearable
                                        outlined
                                    ></v-select>
                                    <v-select
                                        :items="departments"
                                        v-model="dish.department_id"
                                        item-text="name"
                                        item-value="id"
                                        label="Цех"
                                        :error-messages="errors.department_id"
                                        clearable
                                        outlined
                                    ></v-select>
                                    <tiptap-vuetify v-model="dish.description" :extensions="extensions"></tiptap-vuetify>
                                </v-col>
                                <v-col sm="12" lg="6">
                                    <v-autocomplete
                                        v-model="dish.ingredient_ids"
                                        :items="ingredients"
                                        item-text="name"
                                        item-value="id"
                                        :error-messages="errors.ingredient_ids"
                                        clearable
                                        outlined
                                        small-chips
                                        label="Ингредиенты"
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
import { TiptapVuetify, Heading, Bold, Italic, Strike, Underline, Code, Paragraph, BulletList, OrderedList, ListItem, Link, Blockquote, HardBreak, HorizontalRule, History } from 'tiptap-vuetify'

export default {
    name: "Dishes",
    components: { TiptapVuetify },
    data: () => ({
        dishes: [],
        total: 1,
        name: null,
        filter: {
            page: 1,
            name: ''
        },
        dish: {
            name: '',
            time: 0,
            description: '',
            department: null,
            code: '',
            ingredients: [],
            is_custom: true
        },
        ingredients: [],
        departments: [],
        rations: [],
        errors: [],
        edit: -1,
        dialog: false,
        extensions: [
            History,
            Blockquote,
            Link,
            Underline,
            Strike,
            Italic,
            ListItem,
            BulletList,
            OrderedList,
            [Heading, {
                options: {
                    levels: [1, 2, 3]
                }
            }],
            Bold,
            Code,
            HorizontalRule,
            Paragraph,
            HardBreak
        ]
    }),
    mounted() {
        this.getDishes()
        this.getIngredients()
        this.getRations()
        this.getDepartments()
    },
    methods: {
        async getDishes(){
            await axios
                .get('/api/dishes?page=' + this.filter.page + '&name=' + this.filter.name)
                .then(response => {
                    this.dishes = response.data.data
                    this.total = response.data.meta.last_page
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
        changePage(event) {
            this.filter.page = event
            this.getDishes()
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
                .post('/api/dishes', this.dish)
                .then(response => {
                    if(response.data.status){
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.msg,
                            'color': 'green',
                            'type': 'success'
                        })
                        this.close()
                        this.getDishes()
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
                .patch('/api/dishes/'+this.dish.id, this.dish)
                .then(response => {
                    if(response.data.status){
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.msg,
                            'color': 'green',
                            'type': 'success'
                        })
                        this.close()
                        this.getDishes()
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
            this.edit = -1
            this.dish = {
                name: '',
                ration_id: 0,
                description: '',
                ingredient_ids: []
            }
            this.errors = []
        },
        editItem(dish){
            this.edit = 1
            this.dish = dish
            this.dialog = true
        }
    }
}
</script>
