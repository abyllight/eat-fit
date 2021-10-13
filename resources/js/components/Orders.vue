<template>
    <div>
        <v-row>
            <v-btn
                class="ma-3"
                :loading="amo_loading"
                :disabled="amo_loading"
                color="primary"
                @click="fetchLeads"
            >
                Получить данные
            </v-btn>
            <v-btn
                class="ma-3"
                :loading="amo_loading"
                :disabled="amo_loading"
                color="primary"
                @click="geocode"
            >
                Геокодировать
            </v-btn>
            <v-btn
                class="ma-3"
                :loading="amo_loading"
                :disabled="amo_loading"
                color="primary"
                @click="setInterval"
            >
                Интервал
            </v-btn>

            <v-switch
                class="ma-3"
                color="primary"
                v-model="is_weekend"
                :label="week"
                @change="setWeek"
            ></v-switch>
        </v-row>
        <v-row>
            <v-col cols="12" sm="12" lg="9">
                <v-card>
                    <v-card-title>
                        <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Поиск"
                            single-line
                            hide-details
                        ></v-text-field>
                    </v-card-title>
                    <v-data-table
                        :loading="loading"
                        loading-text="Loading... Please wait"
                        :headers="headers"
                        :items="orders"
                        :items-per-page="itemsPerPage"
                        item-key="id"
                        :search="search"
                        hide-default-footer
                        @click:row="showDetails"
                    >

                        <template v-slot:item.index="{ index }">
                            {{ index + 1 }}
                        </template>
                        <template v-slot:item.tag="{ item }">
                            <span :class="item.diet_color">{{item.tag}}</span>
                        </template>
                        <template v-slot:item.time="{ item }">
                            <span :class="item.time_old ? 'green--text': ''">{{ item.time }}</span>
                            <p class="red--text caption">{{ item.time_old }}</p>
                        </template>
                        <template v-slot:item.yaddress="{ item }">
                            <span :class="item.yaddress_old ? 'green--text': ''">{{ item.yaddress }}</span>
                            <p class="red--text caption">{{ item.yaddress_old }}</p>
                        </template>
                        <template v-slot:item.geo="{ item }">
                            <v-chip
                                :color="item.lat ? 'green' : 'red'"
                                label
                                x-small
                                text-color="white"
                            >
                                geo
                            </v-chip>
                        </template>
                        <template v-slot:item.int="{ item }">
                            <v-chip
                                :color="item.interval > 0 ? 'green' : 'red'"
                                label
                                x-small
                                text-color="white"
                            >
                                {{ item.interval }}
                            </v-chip>
                        </template>
                    </v-data-table>
                </v-card>
            </v-col>
            <v-col>
                <v-card
                    color="#385F73"
                    dark
                    class="mb-5"
                >
                    <v-card-title class="text-h5">
                        Итого: {{ orders.length }}
                    </v-card-title>
                </v-card>
                <v-card class="mb-5">
                    <v-card-title class="text-h5">
                        Lite: {{ lite.total }}
                    </v-card-title>
                    <v-card-text>
                        <div>
                            <v-chip
                                class="ma-2"
                                label
                            >
                                XS: {{ lite.xs }}
                            </v-chip>
                            <v-chip
                                class="ma-2"
                                label
                            >
                                S: {{ lite.s }}
                            </v-chip>
                            <v-chip
                                class="ma-2"
                                label
                            >
                                M: {{ lite.m }}
                            </v-chip>
                            <v-chip
                                class="ma-2"
                                label
                            >
                                L: {{ lite.l }}
                            </v-chip>
                            <v-chip
                                class="ma-2"
                                label
                            >
                                XL: {{ lite.xl }}
                            </v-chip>
                        </div>
                    </v-card-text>
                </v-card>
                <v-card class="mb-5">
                    <v-card-title class="text-h5">
                        Select: {{ select.total }}
                    </v-card-title>
                    <v-card-text>
                        <div>
                            <v-chip
                                class="ma-2"
                                label
                            >
                                XS: {{ select.xs }}
                            </v-chip>
                            <v-chip
                                class="ma-2"
                                label
                            >
                                S: {{ select.s }}
                            </v-chip>
                            <v-chip
                                class="ma-2"
                                label
                            >
                                M: {{ select.m }}
                            </v-chip>
                            <v-chip
                                class="ma-2"
                                label
                            >
                                L: {{ select.l }}
                            </v-chip>
                            <v-chip
                                class="ma-2"
                                label
                            >
                                XL: {{ select.xl }}
                            </v-chip>
                        </div>
                    </v-card-text>
                </v-card>
                <v-card class="mb-5">
                    <v-card-title class="text-h5">
                        Detox: {{ detox }}
                    </v-card-title>
                </v-card>
                <v-card>
                    <v-card-title class="text-h5">
                        GO: {{ go }}
                    </v-card-title>
                </v-card>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-dialog
                v-model="dialog"
                fullscreen
                hide-overlay
                transition="dialog-bottom-transition"
            >
                <v-card>
                    <v-toolbar
                        dark
                        color="primary"
                    >
                        <v-btn
                            icon
                            dark
                            @click="close"
                        >
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-toolbar-title>Анкета</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-toolbar-items>
                            <v-btn
                                dark
                                text
                                @click="save"
                            >
                                Сохранить
                            </v-btn>
                        </v-toolbar-items>
                    </v-toolbar>
                    <v-card-title>
                        <span class="text-h5"> {{order.name}} {{order.tag}}</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container fluid>
                            <v-row>
                                <v-col
                                    sm="12"
                                    lg="6"
                                >
                                    <v-card v-if="order.diet" color="lime lighten-4">
                                        <v-card-text>
                                            {{order.diet}}
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                                <v-col>
                                    <v-card v-if="order.diet_old" class="mt-4" color="red lighten-4">
                                        <v-card-text>
                                            {{order.diet_old}}
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                            <v-row class="mb-4">
                                <v-col cols="12">
                                    <h3 class="mb-4">Черный список</h3>
                                    <v-autocomplete
                                        v-model="blacklist"
                                        :items="ingredients"
                                        item-text="name"
                                        item-value="id"
                                        clearable
                                        outlined
                                        small-chips
                                        label="Ингредиенты"
                                        multiple
                                    ></v-autocomplete>
                                    <v-btn
                                        dark
                                        @click="save"
                                    >
                                        Сохранить
                                    </v-btn>
                                </v-col>
                            </v-row>
                            <v-divider class="my-6"></v-divider>
                            <h2 class="mb-3">{{duty.name}}</h2>
                            <v-row class="py-3" v-if="Object.keys(duty).length > 0">
                                <v-expansion-panels>
                                    <v-expansion-panel>
                                        <v-expansion-panel-header>
                                            Завтрак 1
                                        </v-expansion-panel-header>
                                        <v-expansion-panel-content>
                                            <v-row>
                                                <v-col>

                                                </v-col>
                                                <v-col>
                                                    <v-list dense>
                                                        <v-list-item-group
                                                            v-model="t"
                                                            multiple
                                                        >
                                                            <v-list-item
                                                                v-for="(ing, index) in duty.dishes[0].ingredients"
                                                                :key="ing.id"
                                                                :class="blacklist.includes(ing.id) ? 'red lighten-3' : ''"
                                                                dense
                                                            >
                                                                <template v-slot:default="{ active }">
                                                                    <v-list-item-action>
                                                                        <v-checkbox :input-value="active"></v-checkbox>
                                                                    </v-list-item-action>
                                                                    <v-list-item-title>{{index+1}}. {{ing.name}}</v-list-item-title>
                                                                </template>
                                                            </v-list-item>
                                                        </v-list-item-group>
                                                    </v-list>
                                                </v-col>
                                                <v-col>

                                                </v-col>
                                            </v-row>
                                        </v-expansion-panel-content>
                                    </v-expansion-panel>
                                </v-expansion-panels>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>
<script>
    export default {
        name: 'Client',
        data: () => ({
            orders: [],
            lite: [],
            select: [],
            detox: 0,
            go: 0,
            week: '',
            is_weekend: false,
            itemsPerPage: 300,
            search: '',
            headers: [
                { text: '#', value: 'index' },
                { text: 'Имя', value: 'name' },
                { text: 'Тэг', value: 'tag' },
                { text: 'Время', value: 'time' },
                { text: 'Yandex', value: 'yaddress' },
                { text: 'Курьер', value: 'courier_name' },
                { text: 'Geo', value: 'geo' },
                { text: 'Int', value: 'int' },
            ],
            amo_loading: false,
            loading: true,
            dialog: false,
            ingredients: [],
            blacklist: [],
            order: {},
            duty: {},
            t: []
        }),
        mounted() {
            this.getWeek()
            this.getLeads()
            this.getIngredients()
        },
        methods: {
            async getLeads() {
                this.loading = true
                await axios
                    .get('/api/orders')
                    .then(response => {
                        this.orders = response.data.orders
                        this.lite = response.data.lite
                        this.select = response.data.select
                        this.detox = response.data.detox
                        this.go = response.data.go
                        console.log(this.orders)
                    })
                    .catch(error => {
                        this.loading = false
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': error.message,
                            'color': 'error',
                            'type': 'error'
                        })
                    })
                    .finally(() => (this.loading = false))
            },
            async fetchLeads() {
                this.amo_loading = true
                await axios
                    .get('/api/amo/leads')
                    .then(() => {
                        this.getLeads()
                    })
                    .catch(error => {
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': error.message,
                            'color': 'error',
                            'type': 'error'
                        })
                    })
                    .finally(() => (this.amo_loading = false))
            },
            showDetails(index){
                this.order = index
                this.blacklist = index.blacklist.map(a => a.id)
                this.dialog = true
            },
            async geocode() {
                this.amo_loading = true
                await axios
                    .get('/api/map/geocode')
                    .then(response => {
                        this.getLeads()
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.message,
                            'color': response.status ? 'green' : 'error',
                            'type': response.status ? 'success' : 'error',
                        })
                    })
                    .catch(error => {
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': error.message,
                            'color': 'error',
                            'type': 'error'
                        })
                    })
                    .finally(() => (this.amo_loading = false))
            },
            async setInterval() {
                this.amo_loading = true
                await axios
                    .get('/api/map/interval')
                    .then(response => {
                        this.getLeads()
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.message,
                            'color': response.status ? 'green' : 'error',
                            'type': response.status ? 'success' : 'error',
                        })
                    })
                    .catch(error => {
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': error.message,
                            'color': 'error',
                            'type': 'error'
                        })
                    })
                    .finally(() => (this.amo_loading = false))
            },
            getWeek(){
                 axios
                    .get('/api/week/get')
                    .then(response => {
                        this.is_weekend = response.data.is_weekend
                        this.week = this.is_weekend ? 'Выходные' : 'Будни'
                        this.duty = response.data.duty
                    })
                    .catch(error => {
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': error.message,
                            'color': 'error',
                            'type': 'error'
                        })
                    })
            },
            setWeek(){
                axios
                    .post('/api/week/set')
                    .then(() => {
                        this.getWeek()
                        this.getLeads()
                    })
                    .catch(error => {
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': error.message,
                            'color': 'error',
                            'type': 'error'
                        })
                    })
            },
            async getIngredients(){
                await axios
                    .get('/api/ingredients')
                    .then(response => {
                        this.ingredients = response.data.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            close(){
                this.order = {}
                this.blacklist = []
                this.dialog = false
            },
            save(){
                axios
                    .post('/api/blacklist', {
                        id: this.order.id,
                        blacklist: this.blacklist
                    })
                    .then(response => {
                        this.close()

                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.msg,
                            'color': 'green',
                            'type': 'success'
                        })

                        this.getLeads()
                    })
                    .catch(error => {
                        console.log(error)
                        this.errors = error.response.data.errors
                    })
            }
        }
    }
</script>
