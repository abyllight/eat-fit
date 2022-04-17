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
                    <img :src="'storage/'+item.image" width="40" class="ma-1">
                </template>
                <template v-slot:top>
                    <v-toolbar
                        flat
                    >
                        <v-toolbar-title>Values</v-toolbar-title>
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
    name: "Builder",
    components: {CRUD},
    data: () => ({
        loading: true,
        dialog: false,
        dialogDelete: false,
        title: 'Builder Values',
        headers: [
            { text: '#', value: 'index' },
            { text: 'Image', value: 'image' },
            { text: 'Имя', value: 'name' },
            { text: 'Код', value: 'slug', sortable: false },
            { text: 'Действия', value: 'actions', sortable: false },
        ],
        items: [],
        categories: [],
        multipart: true,
        id: null,
        models: [
            {
                model: 'category_id',
                label: 'Категория',
                type: 'v-select',
                chips: false,
                multiple: false,
                item_name: 'name',
                items: [],
                value: null
            },
            {
                model: 'name',
                label: 'Название',
                type: 'v-text-field',
                value: null
            },
            {
                model: 'slug',
                label: 'Код',
                type: 'v-text-field',
                value: null
            },
            {
                model: 'image',
                label: 'Картинка',
                type: 'v-file-input',
                value: null
            }
        ],
        link: '/api/builder-values',
        is_edit: false
    }),
    mounted() {
        this.fetchItems()
        this.fetchCategories()
    },
    methods: {
        async fetchItems() {
            await axios
                .get('/api/builder-values')
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
                .get('/api/builder-categories')
                .then(response => {
                    this.categories = response.data
                    this.models[0].items = response.data
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
            this.fetchItems()
        },
        deleteItem(id){
            this.id = id
            this.dialogDelete = true
        }
    }
}
</script>
