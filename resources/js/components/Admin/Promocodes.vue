<template>
    <v-data-table
        :headers="headers"
        :items="promocodes"
        :loading="loading"
        loading-text="Loading... Please wait"
        class="elevation-1"
    >
        <template v-slot:item.index="{ index }">
            {{ index + 1 }}
        </template>
        <template v-slot:item.is_fixed="{ item }">
            {{ item.type === 1 ? 'тг' : (item.type === 0 ? '%' : 'Текст')}}
        </template>
        <template v-slot:item.is_active="{ item }">
            {{ item.is_active ? 'Активирован' : 'Деактивирован'}}
        </template>
        <template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title>Промокоды</v-toolbar-title>
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
                            <span class="text-h5">Промокод</span>
                        </v-card-title>

                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col
                                        cols="12"
                                        sm="6"
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
                                    >
                                        <v-text-field
                                            v-model.trim="editedItem.code"
                                            label="Код"
                                            :error-messages="errors.code"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                    >
                                        <v-autocomplete
                                            v-model="editedItem.type"
                                            :items="types"
                                            item-text="name"
                                            item-value="type"
                                        ></v-autocomplete>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                    >
                                        <v-text-field
                                            v-if="editedItem.type !== 2"
                                            v-model.trim="editedItem.sum"
                                            label="Значение"
                                            :error-messages="errors.sum"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="12"
                                    >
                                        <v-text-field
                                            v-model.trim="editedItem.msg"
                                            label="Текст"
                                            :error-messages="errors.msg"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                    >
                                        <v-menu
                                            ref="first"
                                            v-model="first"
                                            :close-on-content-click="false"
                                            :return-value.sync="date"
                                            transition="scale-transition"
                                            offset-y
                                            min-width="auto"
                                        >
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-text-field
                                                    v-model="editedItem.date_from"
                                                    label="Начало"
                                                    prepend-icon="mdi-calendar"
                                                    readonly
                                                    v-bind="attrs"
                                                    v-on="on"
                                                    :error-messages="errors.date_from"
                                                ></v-text-field>
                                            </template>
                                            <v-date-picker
                                                v-model="editedItem.date_from"
                                                no-title
                                                scrollable
                                                :min="date"
                                            >
                                                <v-spacer></v-spacer>
                                                <v-btn
                                                    text
                                                    color="primary"
                                                    @click="first = false"
                                                >
                                                    Cancel
                                                </v-btn>
                                                <v-btn
                                                    text
                                                    color="primary"
                                                    @click="$refs.first.save(editedItem.date_from)"
                                                >
                                                    OK
                                                </v-btn>
                                            </v-date-picker>
                                        </v-menu>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                    >
                                        <v-menu
                                            ref="second"
                                            v-model="second"
                                            :close-on-content-click="false"
                                            :return-value.sync="editedItem.date_to"
                                            transition="scale-transition"
                                            offset-y
                                            min-width="auto"
                                        >
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-text-field
                                                    v-model="editedItem.date_to"
                                                    label="Конец"
                                                    prepend-icon="mdi-calendar"
                                                    readonly
                                                    v-bind="attrs"
                                                    v-on="on"
                                                    :error-messages="errors.date_to"
                                                ></v-text-field>
                                            </template>
                                            <v-date-picker
                                                v-model="editedItem.date_to"
                                                no-title
                                                scrollable
                                                :min="date"
                                            >
                                                <v-spacer></v-spacer>
                                                <v-btn
                                                    text
                                                    color="primary"
                                                    @click="second = false"
                                                >
                                                    Cancel
                                                </v-btn>
                                                <v-btn
                                                    text
                                                    color="primary"
                                                    @click="$refs.second.save(editedItem.date_to)"
                                                >
                                                    OK
                                                </v-btn>
                                            </v-date-picker>
                                        </v-menu>
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
                @click="activate(item)"
            >
                {{ item.is_active ? 'mdi-stop' : 'mdi-play' }}
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
    name: 'Promocodes',
    data: () => ({
        dialog: false,
        dialogDelete: false,
        loading: true,
        headers: [
            { text: '#', value: 'index' },
            { text: 'Название', value: 'name' },
            { text: 'Код', value: 'code', sortable: false },
            { text: 'Значение', value: 'sum', sortable: false },
            { text: 'Тип', value: 'is_fixed', sortable: false },
            { text: 'Начало', value: 'date_from', sortable: false },
            { text: 'Конец', value: 'date_to', sortable: false },
            { text: 'Статус', value: 'is_active', sortable: false },
            { text: 'Действия', value: 'actions', sortable: false },
        ],
        promocodes: [],
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        first: false,
        second: false,
        types: [
            {
                type: 0,
                name: 'Процент'
            },
            {
                type: 1,
                name: 'Сумма'
            },
            {
                type: 2,
                name: 'Текст'
            }
        ],
        editedIndex: -1,
        editedItem: {
            id: null,
            name: '',
            code: '',
            type: 0,
            sum: 0,
            msg: '',
            date_from: '',
            date_to: ''
        },
        defaultItem: {
            id: 0,
            name: null,
            code: null,
            sum: 0,
            type: 0,
            msg: '',
            date_from: null,
            date_to: null
        },
        errors: []
    }),
    created () {
        this.fetchPromocodes()

        axios.get('/api/promocode/text')
            .then(response => {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
    },
    methods: {
        async fetchPromocodes() {
            await axios
                .get('/api/promocodes')
                .then(response => {
                    this.promocodes = response.data ?? []
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => (this.loading = false))
        },
        editItem (item) {
            this.editedIndex = this.promocodes.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.editedItem.id = item.id
            this.dialog = true
        },
        activate (item) {
            axios
                .post('/api/promocode/' + item.id+ '/activate')
                .then(response => {
                    if (response.data.status) {
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.msg,
                            'color': 'green',
                            'type': 'success'
                        })
                        this.fetchPromocodes()
                    }else{
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.msg,
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
        deleteItem (item) {
            this.editedIndex = this.promocodes.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.editedItem.id = item.id
            this.dialogDelete = true
        },
        deleteItemConfirm() {
            axios
                .delete('/api/promocodes/' + this.editedItem.id)
                .then(response => {
                    this.close()
                    if (response.data.status) {
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.msg,
                            'color': 'green',
                            'type': 'success'
                        })
                        this.fetchPromocodes()
                    }else{
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.msg,
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
        save () {
            let link = '/api/promocodes'

            if (this.editedIndex > -1) {
                link += '/'+this.editedItem.id
            }

            axios({
                method: this.editedIndex > -1 ? 'PATCH' : 'POST',
                url: link,
                data: {
                    name: this.editedItem.name,
                    code: this.editedItem.code,
                    sum: this.editedItem.sum,
                    type: this.editedItem.type,
                    msg: this.editedItem.msg,
                    date_from: this.editedItem.date_from,
                    date_to: this.editedItem.date_to
                }
            }).then(response => {
                    this.close()
                    this.$store.dispatch('showAlert', {
                        'isVisible': true,
                        'msg': response.data.msg,
                        'color': response.data.status ? 'green' : 'error',
                        'type': response.data.status ? 'success' : 'error'
                    })
                    this.fetchPromocodes()
                })
                .catch(error => {
                    this.errors = error.response.data.errors
                })
        },
    },
}
</script>
