<template>
    <v-row>
        <v-col>
            <v-data-table
                :headers="headers"
                :items="items"
                :loading="loading"
                loading-text="Загрузка..."
                class="elevation-1"
            >
                <template v-slot:item.index="{ index }">
                    {{ index + 1 }}
                </template>
                <template v-slot:item.image="{ item }">
                    <img :src="'storage/'+item.image" width="40">
                </template>
                <template v-slot:top>
                    <v-toolbar
                        flat
                    >
                        <v-toolbar-title>Продукты</v-toolbar-title>
                        <v-divider
                            class="mx-4"
                            inset
                            vertical
                        ></v-divider>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary"
                            dark
                            class="mb-2"
                            @click="create"
                        >
                            Добавить
                        </v-btn>
                    </v-toolbar>
                </template>
                <template v-slot:item.actions="{ item }">
                    <v-btn
                        x-small
                        class="mr-2"
                        @click="edit(item)"
                    >
                        редактировать
                    </v-btn>
                    <v-btn
                        x-small
                        @click="deleteItem(item.id)"
                    >
                        удалить
                    </v-btn>
                </template>
            </v-data-table>
            <CRUD
                :dialog="dialog"
                :dialog-delete="dialogDelete"
                :title="title"
                :models="models"
                :link="link"
                :id="id"
                :is-edit="is_edit"
                :multipart="multipart"
                @close="close"
                @refresh="refresh"
            />
        </v-col>
    </v-row>
</template>

<script>
import CRUD from "../Utilities/CRUD";
export default {
    name: "Products",
    components: { CRUD },
    data: () => ({
        loading: true,
        dialog: false,
        dialogDelete: false,
        title: 'Продукт',
        categories: [],
        headers: [
            { text: '#', value: 'index' },
            { text: 'Image', value: 'image' },
            { text: 'Имя', value: 'title' },
            { text: 'Цена', value: 'price' },
            { text: 'Категория', value: 'category_name' },
            { text: 'Действия', value: 'actions', sortable: false },
        ],
        items: [],
        id: null,
        multipart: true,
        models: [
            {
                model: 'title',
                label: 'Название',
                type: 'v-text-field',
                value: null
            },
            {
                model: 'category_id',
                label: 'Категория',
                type: 'v-select',
                chips: false,
                multiple: false,
                item_name: 'title',
                items: [],
                value: null
            },
            {
                model: 'image',
                label: 'Картинка',
                type: 'v-file-input',
                value: null
            },
            {
                model: 'price',
                label: 'Цена',
                type: 'v-text-field',
                value: null
            },
            {
                model: 'wholesale_price',
                label: 'Цена оптовая',
                type: 'v-text-field',
                value: null
            },
            {
                model: 'description',
                label: 'Описание',
                type: 'v-textarea',
                value: null
            },
            {
                model: 'composition',
                label: 'Состав',
                type: 'v-textarea',
                value: null
            },
            {
                model: 'weight',
                label: 'Вес',
                type: 'v-text-field',
                value: null
            },
            {
                model: 'kcal',
                label: 'Ккал',
                type: 'v-text-field',
                value: null
            },
            {
                model: 'fat',
                label: 'Жиры',
                type: 'v-text-field',
                value: null
            },
            {
                model: 'protein',
                label: 'Белки',
                type: 'v-text-field',
                value: null
            },
            {
                model: 'carbohydrate',
                label: 'Углеводы',
                type: 'v-text-field',
                value: null
            }
        ],
        link: '/api/products/',
        is_edit: false
    }),
    mounted() {
        this.fetchProducts()
        this.fetchCategories()
    },
    methods: {
        async fetchProducts() {
            await axios
                .get('/api/products')
                .then(response => {
                    this.items = response.data
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => (this.loading = false))
        },
        async fetchCategories() {
            await axios
                .get('/api/product-categories')
                .then(response => {
                    this.categories = response.data
                    this.models[1].items = response.data
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => (this.loading = false))
        },
        create(){
            this.dialog = true
        },
        edit(item){
            this.models.map(obj => {
                obj.value = item[obj.model]
            })
            this.id = item.id
            this.is_edit = true
            this.dialog = true
        },
        close(){
            this.dialog = false
            this.dialogDelete = false
            this.is_edit = false
            this.models.map(obj => {
                obj.value = null
            })
        },
        refresh(){
            this.close()
            this.fetchCategories()
        },
        deleteItem(id){
            this.id = id
            this.dialogDelete = true
        }
    }
}
</script>
