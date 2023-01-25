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
                v-if="dish.i_name"
                sm="12"
                lg="4"
            >
                <h3>{{dish.i_name}}</h3>
                <v-list-item
                    v-for="(item, key) in dish.original_ingredients"
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
                    @click="update"
                    class="mt-5"
                >
                    Сохранить
                </v-btn>
            </v-col>
        </v-row>
    </div>
</template>
<script>
    import { TiptapVuetify, Heading, Bold, Italic, Strike, Image, Underline, Code, Paragraph, BulletList, OrderedList, ListItem, Link, Blockquote, HardBreak, HorizontalRule, History } from 'tiptap-vuetify'

    export default {
        name: 'CuisineDishesEdit',
        components: { TiptapVuetify },
        props: ['id'],
        data: () => ({
            ingredients: [],
            departments: [],
            all_rations: [],
            cuisine: {},
            dish: {
                name: '',
                cuisine_id: 0,
                ration_id: 0,
                code: '',
                department_id: 0,
                ingredients: [],
                description: null
            },
            dishes: [],
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
            loading: false,
            disabled: false,
            errors: [],
            extensions: [
                History,
                Blockquote,
                Link,
                Underline,
                Strike,
                Italic,
                Image,
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
            this.getDish()
            this.getIngredients()
            this.getDepartments()
            this.getAllRations()
        },
        methods: {
            async getDish() {
                await axios
                    .get('/api/dishes/'+this.id)
                    .then(response => {
                        this.dish = response.data
                        this.sizes = this.sizes.map(x => {
                            let found = this.dish.sizes.find(d => d.size === x.id)

                            return {
                                ...x,
                                val: found.weight
                            }
                        })
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
                    .get('/api/rations')
                    .then(response => {
                        this.all_rations = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            update(){
                this.dish.sizes = this.sizes
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
