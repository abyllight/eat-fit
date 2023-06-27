<template>
    <div>
        <v-row>
            <v-btn
                v-if="isActive"
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
            <v-col cols="12" md="10">
                <v-card>
                    <v-card-title>
                        <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Поиск"
                            single-line
                            hide-details
                        ></v-text-field>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" dark @click="dialog=true">
                            Добавить заказ
                        </v-btn>
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
                        @click:row="openOrder"
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
                                :color="item.geo ? 'green' : 'red'"
                                label
                                x-small
                                text-color="white"
                            >geo</v-chip>
                        </template>
                        <template v-slot:item.interval="{ item }">
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
            <v-col cols="12" md="2">
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
                        Daily: {{ daily }}
                    </v-card-title>
                </v-card>
                <v-card class="mb-5">
                    <v-card-title class="text-h5">
                        Detox: {{ detox }}
                    </v-card-title>
                </v-card>
                <v-card class="mb-5">
                    <v-card-title class="text-h5">
                        GO: {{ go }}
                    </v-card-title>
                </v-card>
                <v-card>
                    <v-card-title class="text-h5">
                        Cakes: {{ cakes }}
                    </v-card-title>
                </v-card>
            </v-col>
        </v-row>
        <CrudOrder
            ref="child"
            :dialog="dialog"
            :link="link"
            :id="id"
            :is-edit="is_edit"
            @close="closeDialog"
            @refresh="refresh"
        />
    </div>
</template>
<script>
    import CrudOrder from "./Utilities/CrudOrder";
    export default {
        name: 'Client',
        components: {CrudOrder},
        data: () => ({
            orders: [],
            lite: [],
            select: [],
            detox: 0,
            daily: 0,
            go: 0,
            cakes: 0,
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
                { text: 'Gap', value: 'interval' },
            ],
            amo_loading: false,
            loading: true,
            dialog: false,
            link: '/api/orders/',
            id: null,
            is_edit: false
        }),
        mounted() {
            this.getWeek()
            this.getLeads()
            this.getOrderStat()
        },
        computed: {
            isActive() {
                const d = new Date()
                let hour = d.getHours()
                return hour < 5 || hour >= 10
            }
        },
        methods: {
            async getLeads() {
                this.loading = true
                await axios
                    .get('/api/orders')
                    .then(response => {
                        this.orders = response.data
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
                    .get('/api/orders/eat-fit')
                    .then((response) => {
                        if (response.data.status){
                            this.getLeads()
                        }else {
                            this.$store.dispatch('showAlert', {
                                'isVisible': true,
                                'msg': response.data.msg,
                                'color': 'error',
                                'type': 'error'
                            })
                        }
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
            async getOrderStat(){
                await axios
                    .get('/api/orders/stat')
                    .then(response => {
                        this.lite = response.data.lite
                        this.select = response.data.select
                        this.detox = response.data.detox
                        this.daily = response.data.daily
                        this.go = response.data.go
                        this.cakes = response.data.cakes
                    })
                    .catch(error => {
                        console.log(error)
                    })
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
            closeDialog(){
                this.dialog = false
            },
            refresh(){
                this.closeDialog()
                this.getLeads()
            },
            openOrder(val){
                this.id = val.id
                this.is_edit = true
                this.$refs.child.fetchOrder(val.id)
                this.dialog = true
            }
        }
    }
</script>
