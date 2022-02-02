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
                        <v-toolbar-title>Пользователи</v-toolbar-title>
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
    name: "Users",
    components: { CRUD },
    data: () => ({
        loading: true,
        dialog: false,
        dialogDelete: false,
        title: 'Пользователь',
        headers: [
            { text: '#', value: 'index' },
            { text: 'Имя', value: 'name' },
            { text: 'Телефон', value: 'phone', sortable: false },
            { text: 'Город', value: 'city'},
            { text: 'Роли', value: 'role_names', sortable: false },
            { text: 'Действия', value: 'actions', sortable: false },
        ],
        items: [],
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
                value: null
            },
            {
                model: 'roles',
                label: 'Роли',
                type: 'v-select',
                chips: true,
                multiple: true,
                item_name: 'name',
                items: [],
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
                model: 'password',
                label: 'Пароль',
                type: 'v-text-field',
                value: null
            },
        ],
        link: '/api/users',
        is_edit: false
    }),
    mounted() {
        this.fetchUsers()
        this.fetchRoles()
        this.fetchCities()
    },
    methods: {
        async fetchUsers() {
            await axios
                .get('/api/users')
                .then(response => {
                    this.items = response.data
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => (this.loading = false))
        },
        async fetchRoles() {
            await axios
                .get('/api/roles')
                .then(response => {
                    this.roles = response.data
                    this.models[2].items = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        async fetchCities() {
            await axios
                .get('/api/cities')
                .then(response => {
                    this.roles = response.data
                    this.models[3].items = response.data
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
            this.fetchUsers()
        },
        deleteItem(id){
            this.id = id
            this.dialogDelete = true
        }
    }
}
</script>
