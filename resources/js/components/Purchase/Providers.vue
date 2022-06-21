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
                        <v-toolbar-title>Поставщики</v-toolbar-title>
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
    name: "Providers",
    components: { CRUD },
    data: () => ({
        loading: true,
        dialog: false,
        dialogDelete: false,
        title: 'Поставщик',
        headers: [
            { text: '#', value: 'index' },
            { text: 'Имя', value: 'name' },
            { text: 'Телефон', value: 'phone', sortable: false },
            { text: 'Город', value: 'city'},
            { text: 'Действия', value: 'actions', sortable: false },
        ],
        items: [],
        categories: [],
        id: null,
        roles: [],
        cities: [],
        models: [
            {
                model: 'name',
                label: 'Имя',
                type: 'v-text-field',
                value: null
            },
            {
                model: 'phone',
                label: 'Телефон',
                type: 'v-text-field',
                mask: '+7 (###) ###-##-##',
                value: null
            },
            {
                model: 'city_id',
                label: 'Город',
                type: 'v-select',
                item_name: 'name',
                items: [],
                value: null
            },
            {
                model: 'address',
                label: 'Адрес',
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
                model: 'categories',
                label: 'Категории',
                type: 'v-autocomplete',
                chips: true,
                multiple: true,
                item_name: 'name',
                items: [],
                value: null
            },
        ],
        link: '/api/providers',
        is_edit: false
    }),
    mounted() {
        this.fetchProviders()
        this.fetchCities()
        this.fetchPCategories()
    },
    methods: {
        async fetchProviders() {
            await axios
                .get('/api/providers')
                .then(response => {
                    this.items = response.data
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => (this.loading = false))
        },
        async fetchPCategories() {
            await axios
                .get('/api/p-categories')
                .then(response => {
                    this.categories = response.data
                    this.models[5].items = response.data
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => (this.loading = false))
        },
        async fetchCities() {
            await axios
                .get('/api/cities')
                .then(response => {
                    this.roles = response.data
                    this.models[2].items = response.data
                })
                .catch(error => {
                    console.log(error)
                })
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
            this.fetchProviders()
        },
        deleteItem(id){
            this.id = id
            this.dialogDelete = true
        }
    }
}
</script>
