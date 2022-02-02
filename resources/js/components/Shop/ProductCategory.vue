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
                <template v-slot:top>
                    <v-toolbar
                        flat
                    >
                        <v-toolbar-title>Категории</v-toolbar-title>
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
                @close="close"
                @refresh="refresh"
            />
        </v-col>
    </v-row>
</template>

<script>
import CRUD from "../Utilities/CRUD";
export default {
    name: "ProductCategory",
    components: { CRUD },
    data: () => ({
        loading: true,
        dialog: false,
        dialogDelete: false,
        title: 'Категория',
        headers: [
            { text: '#', value: 'index' },
            { text: 'Имя', value: 'title' },
            { text: 'Действия', value: 'actions', sortable: false },
        ],
        items: [],
        id: null,
        models: [
            {
                model: 'title',
                label: 'Название',
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
        link: '/api/product-categories/',
        is_edit: false
    }),
    mounted() {
        this.fetchCategories()
    },
    methods: {
        async fetchCategories() {
            await axios
                .get('/api/product-categories')
                .then(response => {
                    this.items = response.data
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
