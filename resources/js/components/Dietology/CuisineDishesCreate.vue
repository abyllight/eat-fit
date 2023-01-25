<template>
    <div>
        <v-row>
            <v-col>
                <v-btn
                    @click="$router.back()"
                >
                    Назад к кухне
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col
                sm="12"
                lg="8"
            >
                <v-text-field
                    v-model="dish.name"
                    label="Название"
                    :error-messages="errors.name"
                    outlined
                    clearable
                ></v-text-field>
                <v-select
                    v-model="r_id"
                    :items="all_rations"
                    item-text="name"
                    item-value="id"
                    outlined
                    disabled
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

                <div>
                    <v-row>
                        <v-col
                            v-for="size in sizes"
                            :key="size.name"
                        >
                            <v-text-field
                                type="number"
                                v-model="size.val"
                                :label="size.name"
                                outlined
                                clearable
                                dense
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </div>

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
                <tiptap-vuetify v-model="dish.description" :extensions="extensions"></tiptap-vuetify>
                <v-btn
                    color="primary"
                    @click="create"
                    class="mt-5"
                >
                    Сохранить
                </v-btn>
            </v-col>
        </v-row>
    </div>
</template>
<script>
    import { TiptapVuetify, Heading, Bold, Italic, Strike, Underline, Code, Paragraph, BulletList, OrderedList, ListItem, Link, Blockquote, HardBreak, HorizontalRule, History } from 'tiptap-vuetify'

    export default {
        name: 'CuisineDishesCreate',
        components: { TiptapVuetify },
        props: {
            id: Number,
            r_id: Number
        },
        data: () => ({
            ingredients: [],
            departments: [],
            all_rations: [],
            loading: false,
            disabled: false,
            errors: [],
            sizes: [
                {
                    id: 1,
                    name: 'XS',
                    val: null
                },
                {
                    id: 2,
                    name: 'S',
                    val: null
                },
                {
                    id: 3,
                    name: 'M',
                    val: null
                },
                {
                    id: 4,
                    name: 'L',
                    val: null
                },
                {
                    id: 5,
                    name: 'XL',
                    val: null
                }
            ],
            dish: {
                cuisine_id: null,
                name: null,
                ration_id: null,
                department_id: null,
                ingredient_ids: [],
                is_custom: false,
                description: null
            },
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
        created() {
            this.getIngredients()
            this.getDepartments()
            this.getAllRations()
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
                    .get('/api/rations')
                    .then(response => {
                        this.all_rations = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            create(){
                this.dish.cuisine_id = this.id
                this.dish.ration_id = this.r_id
                this.dish.sizes = this.sizes

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
                            this.$router.push({name: 'cuisine_dishes', params: {id: this.dish.cuisine_id}});
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
