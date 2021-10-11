<template>
    <v-container>
        <v-row>

        </v-row>
        <v-row>
            <v-col>
                <v-data-table
                    :headers="headers"
                    :items="users"
                    :loading="loading"
                    loading-text="Loading... Please wait"
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
                            <v-dialog v-model="dialogDelete" max-width="500px">
                                <v-card>
                                    <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                                        <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                                        <v-spacer></v-spacer>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-toolbar>
                    </template>
                    <template v-slot:item.actions="{ item }">
                        <v-icon
                            v-if="!item.is_admin"
                            small
                            class="mr-2"
                            @click="edit(item.id)"
                        >
                            mdi-pencil
                        </v-icon>
                        <v-icon
                            v-if="!item.is_admin"
                            small
                            @click="deleteUser(item)"
                        >
                            mdi-delete
                        </v-icon>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "Users",
    data: () => ({
        loading: true,
        dialogDelete: false,
        headers: [
            { text: '#', value: 'index' },
            { text: 'Имя', value: 'name' },
            { text: 'Телефон', value: 'phone' },
            { text: 'Роли', value: 'r_names', sortable: false },
            { text: 'Действия', value: 'actions', sortable: false },
        ],
        users: [],
        user: {},
        errors: []
    }),
    mounted() {
        this.fetchUsers()
    },
    methods: {
        async fetchUsers() {
            await axios
                .get('/api/users')
                .then(response => {
                    this.users = response.data.data ?? []
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => (this.loading = false))
        },
        create(){
            this.$router.push('users/create')
        },
        edit(id){
            this.$router.push('/users/'+id+'/edit')
        },
        closeDelete(){
            this.dialogDelete = false
        },
        deleteUser(item){
            this.user = Object.assign({}, item)
            this.dialogDelete = true
        },
        deleteItemConfirm(){
            axios
                .delete('/api/users/' + this.user.id)
                .then(response => {
                    this.dialogDelete = false
                    this.user = {}
                    this.$store.dispatch('showAlert', {
                        'isVisible': true,
                        'msg': response.data.msg,
                        'color': response.data.status ? 'green' : 'error',
                        'type': response.data.status ? 'success' : 'error'
                    })
                    this.fetchUsers()
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>
