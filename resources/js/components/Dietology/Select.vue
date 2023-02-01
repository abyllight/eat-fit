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
                        v-if="isActive"
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
                    </v-data-table>
                </v-card>
            </v-col>

            <!--   Cards         -->
            <v-col v-if="Object.keys(order).length > 0">

                <div class="mb-5 d-flex justify-space-between">
                    <h3>{{order.name}} | {{order.whatsapp}}</h3>

<!--                    <v-btn color="red" dark small @click="resetResult(order.id)">
                        Сбросить
                    </v-btn>-->
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
                            <div class="d-flex justify-space-between align-center pt-4 px-4">
                                <h3>{{result.ration.name}}</h3>
                                <span>{{result.weight}} гр</span>
                            </div>
                            <v-card-subtitle>{{result.dish_name}}</v-card-subtitle>

                            <v-card-text>{{result.description}}</v-card-text>
                            <v-card-actions>
                                <v-btn
                                    text
                                    @click="openSettings(result.id, result.r_id)"
                                >
                                    настроить
                                </v-btn>
                                <v-btn
                                    v-if="result.is_extra"
                                    color="black"
                                    text
                                    @click="deleteSelect(result.id)"
                                >
                                    Удалить
                                </v-btn>
                                <v-btn
                                    v-else
                                    color="black"
                                    text
                                    @click="activateDeactivate(result.id)"
                                >
                                    {{result.is_active ? 'Убрать' : 'Вернуть'}}
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col
                        cols="12" md="4"
                    >
                        <v-card>
                            <v-card-title>Дополнительно</v-card-title>
                            <v-card-actions>
                                <v-btn
                                    text
                                    @click="dialog = true"
                                >
                                    Добавить
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-dialog
                    v-model="dialog"
                    max-width="400px"
                >
                    <v-card>
                        <v-card-title>
                            Дополнительно
                        </v-card-title>
                        <v-card-text>
                            <v-select
                                v-model="extra.r_id"
                                :items="rations"
                                dense
                                item-text="name"
                                item-value="id"
                                outlined
                                label="Рационы"
                            ></v-select>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn
                                color="primary"
                                text
                                @click="dialog=false"
                            >
                                Закрыть
                            </v-btn>
                            <v-btn
                                color="primary"
                                text
                                @click="addExtra"
                            >
                                Сохранить
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
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
                { text: 'Город', value: 'city' }
            ],
            select_result: [],
            loading: true,
            select_loading: false,
            cuisine: {},
            isSelect: true,
            dialog: false,
            rations: [],
            extra: {
                r_id: null,
                c_id: null,
                o_id: null
            }
        }),
        created() {
            this.getSelect()
            this.getCuisine()
            this.getRations()
            this.generateCode()
        },
        computed: {
            isDutyDishId() {
                return this.dishes[0].id === this.dish.id
            },
            isActive() {
                const d = new Date()
                let hour = d.getHours()
                return hour < 5 || hour >= 10
            }
        },
        methods: {
            addExtra() {
                axios.post('/api/select/extra', this.extra)
                    .then(res => {
                        this.dialog = false
                        window.location.reload()
                    }).catch(err => {
                        console.log(err)
                })
            },
            deleteSelect(id) {
                axios.delete('/api/select/'+id)
                    .then(res => {
                        window.location.reload()
                    }).catch(err => {
                    console.log(err)
                })
            },
            async fetchOrdersFromAmo() {
                this.amo_loading = true
                await axios
                    .get('/api/orders/eat-fit')
                    .then(() => {
                        this.getSelect()
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
                        this.extra.c_id = this.cuisine.id
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
            async getRations(){
                await axios
                    .get('/api/rations')
                    .then(response => {
                        this.rations = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            generateCode() {
                axios.get('/api/select/generate-code')
            },
            showOrderDetails(order){
                this.order = order
                this.extra.o_id = order.id

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
                    this.getSelect()
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
