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
        </v-row>
        <v-row>
            <v-col cols="10">
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
                                int
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
            itemsPerPage: 200,
            search: '',
            headers: [
                { text: '#', value: 'index' },
                { text: 'Имя', value: 'name' },
                { text: 'Тэг', value: 'tag' },
                { text: 'Время', value: 'time' },
                { text: 'Yandex', value: 'yaddress' },
                { text: 'Geo', value: 'geo' },
                { text: 'Int', value: 'int' },
            ],
            amo_loading: false,
            loading: true,
        }),
        mounted() {
            this.getLeads()
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
                console.log(index)
                this.dialog = true
                this.client = index
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
        }
    }
</script>
