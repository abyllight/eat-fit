<template>
    <v-data-table
        :headers="headers"
        :items="roles"
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
                <v-toolbar-title>Роли</v-toolbar-title>
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
                small
                class="mr-2"
                @click="edit(item)"
            >
                mdi-pencil
            </v-icon>
            <v-icon
                small
                @click="deleteRole(item)"
            >
                mdi-delete
            </v-icon>
        </template>
    </v-data-table>
</template>

<script>
export default {
    name: "Roles",
    data: () => ({
        loading: true,
        dialogDelete: false,
        headers: [
            { text: '#', value: 'index' },
            { text: 'Имя', value: 'name' },
            { text: 'Code', value: 'slug', sortable: false },
            { text: 'Действия', value: 'actions', sortable: false },
        ],
        roles: [],
        role: {},
        errors: []
    }),
    mounted() {
        this.fetchRoles()
    },
    methods: {
        async fetchRoles() {
            await axios
                .get('/api/roles')
                .then(response => {
                    this.roles = response.data ?? []
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => (this.loading = false))
        },
        create(){
            this.$router.push('roles/create')
        },
        edit(item){
            //this.$router.push({name: 'roles_edit', params: {roleId: item.id}})
            this.$router.push('/roles/'+item.id+'/edit')
        },
        closeDelete(){
            this.dialogDelete = false
        },
        deleteRole(item){
            this.role = Object.assign({}, item)
            this.dialogDelete = true
        },
        deleteItemConfirm(){
            axios
                .delete('/api/roles/' + this.role.id)
                .then(response => {
                    this.dialogDelete = false
                    this.role = {}
                    this.$store.dispatch('showAlert', {
                        'isVisible': true,
                        'msg': response.data.msg,
                        'color': response.data.status ? 'green' : 'error',
                        'type': response.data.status ? 'success' : 'error'
                    })
                    this.fetchRoles()
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>
