<template>
    <div>
        <!--  Select data section  -->
        <v-row>
            <v-col class="d-flex justify-space-between">

                <div>
                    <div class="d-flex">
                        <v-btn
                            class="mr-3"
                            :disabled="isSelect"
                            color="primary"
                            @click="getSelect"
                            small
                        >
                            Select
                        </v-btn>
                        <v-btn
                            class="mr-5"
                            :disabled="!isSelect"
                            color="primary"
                            @click="getLite"
                            small
                        >
                            Lite
                        </v-btn>

                        <h3>{{cuisine.name}}</h3>
                    </div>
                    <stat class="my-3" :stat="select_stat"></stat>
                </div>

                <div class="mt-2">
                    <v-btn
                        class="mr-4"
                        :loading="amo_loading"
                        :disabled="amo_loading"
                        color="primary"
                        @click="fetchOrdersFromAmo"
                    >
                        Получить данные с AMOCRM
                    </v-btn>
                    <a
                        type="button"
                        href="/api/select/export"
                    >
                        <v-btn
                            color="primary"
                            @click="exportExcel"
                        >
                            Excel
                        </v-btn>
                    </a>
                </div>
            </v-col>
        </v-row>

        <!--   Customer list and select cards   -->
        <v-row>

            <!--  Table list          -->
            <v-col cols="12" md="4">
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
                        height="90vh"
                        :loading="loading"
                        loading-text="Loading... Please wait"
                        :headers="headers"
                        :items="orders"
                        :items-per-page="itemsPerPage"
                        item-key="id"
                        :search="search"
                        hide-default-footer
                        @click:row="showOrderDetails"
                    >
                        <template v-slot:item.index="{ index }">
                            {{ index + 1 }}
                        </template>

                        <template v-slot:item.actions="{ item }">
                            <v-btn
                                x-small
                                class="mr-2"
                                color="lime"
                                @click="sendMessage(item.id, item.whatsapp)"
                            >
                                <v-icon x-small>mdi-whatsapp</v-icon>
                            </v-btn>
                        </template>
                    </v-data-table>
                </v-card>
            </v-col>

            <!--   Cards         -->
            <v-col v-if="Object.keys(order).length > 0">

                <div class="mb-5 d-flex justify-space-between">
                    <h3>{{order.name}}</h3>

                    <v-btn color="red" dark small @click="resetResult(order.id)">
                        Сбросить
                    </v-btn>
                </div>

                <v-row>
                    <v-col
                        cols="12" md="4"
                        v-for="(result, key) in select_result"
                        :key="key"
                    >
                        <v-card
                            :color="result.color"
                            :loading="select_loading"
                        >
                            <v-card-title>{{result.ration.name}}</v-card-title>
                            <v-card-subtitle>{{result.dish_name}}</v-card-subtitle>

                            <v-card-text>{{result.description}}</v-card-text>
                            <v-card-actions>
                                <v-btn
                                    text
                                    @click="openSettings(result.id, result.r_id)"
                                >
                                    open
                                </v-btn>
                                <v-btn
                                    color="black"
                                    text
                                    @click="activateDeactivate(result.id)"
                                >
                                    {{result.is_active ? 'Убрать' : 'Вернуть'}}
                                </v-btn>
                                <v-btn
                                    v-if="result.is_active"
                                    text
                                    @click="whatsapp(result.whatsapp, result.ration.name, result.dish_name)"
                                >
                                    <v-icon dark>
                                        mdi-whatsapp
                                    </v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>
<script>
    import axios from "axios";
    import SelectModal from "../Kitchen/SelectModal";
    import Stat from "./Stat.vue";
    export default {
        name: 'Select',
        components: {Stat, SelectModal},
        data: () => ({
            amo_loading: false,
            orders: [],
            order: {},
            select_stat: {},
            itemsPerPage: 300,
            search: '',
            headers: [
                { text: '#', value: 'index' },
                { text: 'Имя', value: 'name' },
                { text: 'Тэг', value: 'tag' },
                { text: 'WA', value: 'actions' }
            ],
            select_result: [],
            loading: true,
            select_loading: false,
            cuisine: {},
            isSelect: true
        }),
        created() {
            this.getSelect()
            this.getCuisine()
            this.generateCode()
        },
        computed: {
            isDutyDishId() {
                return this.dishes[0].id === this.dish.id
            }
        },
        methods: {
            async fetchOrdersFromAmo() {
                this.amo_loading = true
                await axios
                    .get('/api/orders/eat-fit')
                    .then(() => {
                        this.getOrders()
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
            async getCuisine(){
                await axios
                    .get('/api/cuisine/duty')
                    .then(response => {
                        this.cuisine = response.data.cuisine
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
            },
            generateCode() {
                axios.get('/api/select/generate-code')
            },
            showOrderDetails(order){
                this.order = order
                this.getSelectDetailsByOrder(order.id)
            },
            async getSelectDetailsByOrder(id){
                this.select_loading = true
                await axios
                    .get('/api/selects/order/'+id)
                    .then(response => {
                        this.select_previous = response.data.previous
                        this.select_result = response.data.result
                        this.blacklist = response.data.blacklist
                        this.mix = response.data.blacklist
                        this.wishlist = response.data.wishlist
                        this.select_loading = false
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            openSettings(id, r_id) {
                this.$router.push({name: 'select-details', params: {id: id, r_id: r_id}})
            },
            activateDeactivate(id){
                axios
                    .post('/api/select/activate-deactivate', {
                        select_id: id
                    })
                    .then(response => {
                        this.getSelectDetailsByOrder(this.order.id)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            async getDishesByRation(id){
                await axios
                    .get('/api/dishes/ration/'+id)
                    .then(response => {
                        this.dishes = response.data

                        if (this.dishes.length > 0){
                            this.dish = this.dishes.find(obj => {
                                return obj.id === this.result.dish_id
                            })

                            if (!this.dish){
                                this.dish = this.dishes[0]
                            }
                        }else {
                            this.dish.ingredients = []
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            getSelectColor(id){
                if (this.select_result.length > 0){
                    let select = this.select_result.find(x => x.ration_id === id)
                    return select ? select.color : ''
                }

                return '';
            },
            exportExcel(){},
            whatsapp(num, r_name, name) {
                window.open('https://api.whatsapp.com/send?phone='+num+'&text=Рацион:%20'+ r_name +'%0D%0AНазвание:%20'+ name, '_blank');
            },
            resetResult(id) {
                axios.post('/api/select/reset', {
                    id: id
                }).then(res => {
                    this.getOrders()
                })
            },
            getSelect() {
                axios.get('/api/orders/select')
                    .then(res => {
                        this.loading = false
                        this.orders = res.data.orders
                        this.select_stat = res.data.stat
                        this.isSelect = true
                    })
            },
            getLite() {
                axios.get('/api/orders/lite')
                    .then(res => {
                        this.loading = false
                        this.orders = res.data.orders
                        this.select_stat = res.data.stat
                        this.isSelect = false
                    })
            },
            sendMessage(id, num) {
                axios.get('/api/select/message/'+id)
                    .then(res => {
                        window.open(`https://api.whatsapp.com/send?phone=${num}&text=${encodeURIComponent(res.data)}`, '_blank');
                    })
            },
        }
    }
</script>
