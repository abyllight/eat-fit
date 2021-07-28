<template>
    <v-data-table
        :headers="headers"
        :items="couriers"
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
                <v-toolbar-title>Курьеры</v-toolbar-title>
                <v-divider
                    class="mx-4"
                    inset
                    vertical
                ></v-divider>
                <v-spacer></v-spacer>
                <v-dialog
                    v-model="dialog"
                    max-width="600px"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            color="primary"
                            dark
                            class="mb-2"
                            v-bind="attrs"
                            v-on="on"
                        >
                            Добавить
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="text-h5">Курьер</span>
                        </v-card-title>

                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4"
                                    >
                                        <v-text-field
                                            v-model.trim="editedItem.name"
                                            label="Имя"
                                            :error-messages="errors.name"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4"
                                    >
                                        <v-text-field
                                            v-model="editedItem.phone"
                                            label="Телефон"
                                            v-mask="'+7 (###) ###-##-##'"
                                            :error-messages="errors.phone"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4"
                                    >
                                        <v-text-field
                                            v-model="editedItem.car"
                                            label="Номер машины"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4"
                                    >
                                        <v-text-field
                                            v-if="editedIndex===-1"
                                            v-model="editedItem.password"
                                            label="Пароль"
                                            :error-messages="errors.password"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="blue darken-1"
                                text
                                @click="close"
                            >
                                Отмена
                            </v-btn>
                            <v-btn
                                color="blue darken-1"
                                text
                                @click="save"
                            >
                                Сохранить
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="500px">
                    <v-card>
                        <v-card-title class="text-h5">Вы уверены, что хотите удалить?</v-card-title>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="close">Отмена</v-btn>
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
                @click="editItem(item)"
            >
                mdi-pencil
            </v-icon>
            <v-icon
                small
                class="mr-2"
                @click="editPass(item)"
            >
                mdi-lock
            </v-icon>
            <v-icon
                small
                @click="deleteItem(item)"
            >
                mdi-delete
            </v-icon>
        </template>
    </v-data-table>
</template>

<script>
export default {
    name: 'Couriers',
    data: () => ({
        dialog: false,
        dialogDelete: false,
        loading: true,
        headers: [
            { text: '#', value: 'index' },
            { text: 'Имя', value: 'name' },
            { text: 'Телефон', value: 'phone', sortable: false },
            { text: 'Номер машины', value: 'car', sortable: false },
            { text: 'Действия', value: 'actions', sortable: false },
        ],
        couriers: [],
        editedIndex: -1,
        editedItem: {
            id: null,
            name: '',
            phone: '',
            car: '',
            password: '',
        },
        defaultItem: {
            id: 0,
            name: null,
            phone: null,
            car: null,
            password: null,
        },
        errors: []
    }),
    created () {
        this.fetchCouriers()
    },
    methods: {
        async fetchCouriers() {
            await axios
                .get('/api/couriers')
                .then(response => {
                    console.log(response,'fetch')
                    this.couriers = response.data.data ?? []
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => (this.loading = false))
        },
        editItem (item) {
            this.editedIndex = this.couriers.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.editedItem.id = item.id
            this.editedItem.password = '1'
            this.dialog = true
        },
        editPass (item) {
            this.$router.push('couriers/' + item.id)
        },
        deleteItem (item) {
            this.editedIndex = this.couriers.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.editedItem.id = item.id
            this.dialogDelete = true
        },
        deleteItemConfirm() {
            axios
                .delete('/api/couriers/' + this.editedItem.id)
                .then(response => {
                    this.close()
                    if (response.data.status) {
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.message,
                            'color': 'green',
                            'type': 'success'
                        })
                        this.fetchCouriers()
                    }else{
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.message,
                            'color': 'error',
                            'type': 'error'
                        })
                    }
                })
                .catch(error => {
                    this.$store.commit('SET_ALERT', {
                        'isVisible': true,
                        'msg': error.message,
                        'color': 'error',
                        'type': 'error'
                    })
                })
            this.close()
        },
        close () {
            this.dialog = false
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },
        getPhone() {
            return this.editedItem.phone ? this.editedItem.phone.replace(/[^0-9]/g,'') : ''
        },
        save () {
            let phone = this.getPhone()
            let link = '/api/couriers/'

            if (this.editedIndex > -1) {
                link += this.editedItem.id
            }

            axios
                .post(link, {
                    name: this.editedItem.name,
                    phone: phone,
                    car: this.editedItem.car,
                    password: this.editedItem.password
                })
                .then(response => {
                    this.close()
                    this.$store.dispatch('showAlert', {
                        'isVisible': true,
                        'msg': response.data.message,
                        'color': response.data.status ? 'green' : 'error',
                        'type': response.data.status ? 'success' : 'error'
                    })
                    this.fetchCouriers()
                })
                .catch(error => {
                    this.errors = error.response.data.errors
                })
        },
    },
}
</script>
