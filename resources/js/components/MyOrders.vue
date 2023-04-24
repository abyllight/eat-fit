<template>
    <v-row>
        <v-col
            v-for="(order,index) in orders"
            :key="order.id"
            cols="12"
            sm="4"
        >
            <v-card>
                <div class="d-flex align-start justify-space-between">
                    <div>
                        <v-card-title>{{order.name}}</v-card-title>
                        <v-card-subtitle>
                            <v-chip
                                label
                                :color="order.color"
                                small
                            >
                                {{order.tag}}
                            </v-chip>
                            <v-chip
                                label
                                :color="order.color"
                                small
                            >
                                {{order.time}}
                            </v-chip>
                        </v-card-subtitle>
                    </div>
                    <div><v-card-title>{{index+1}}</v-card-title></div>
                </div>
                <v-card-text>
                    {{order.logistic}}
                </v-card-text>
                <v-divider></v-divider>
                <v-card-text>
                    <strong>{{order.address}}</strong>
                </v-card-text>
                <v-card-actions>
                    <v-btn
                        :href="`tel:${order.phone}`"
                        small
                    >
                        Тел
                    </v-btn>
                    <v-btn
                        :href="`https://api.whatsapp.com/send?phone=${order.whatsapp}&text=${encodeURIComponent('Здравствуйте! Это, EAT&FIT ')}`"
                        small
                        target="_blank"
                    >
                        Ватсап
                    </v-btn>
                    <v-btn
                        :href="`yandexmaps://maps.yandex.ru/?rtext=~${order.lat},${order.lng}`"
                        small
                    >
                        Yndx
                    </v-btn>
                    <v-btn
                        :href="`dgis://2gis.ru/routeSearch/rsType/car/to/${order.lng},${order.lat}`"
                        small
                    >
                        2GIS
                    </v-btn>
                </v-card-actions>
                <v-card-actions>
                    <v-btn
                        v-if="isActive"
                        color="blue-grey"
                        class="white--text"
                        small
                        @click="notify(order.id)"
                        :disabled="order.is_notified"
                    >
                        Еду
                        <v-icon
                            v-if="order.is_notified"
                            right
                        >
                            mdi-check
                        </v-icon>
                    </v-btn>
                    <v-btn
                        color="blue-grey"
                        class="white--text"
                        small
                        @click.stop="openDialog(order)"
                    >
                        Отчет
                        <v-icon
                            v-if="order.is_reported"
                            right
                        >
                            mdi-check
                        </v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        <v-dialog
            v-model="dialog"
            transition="dialog-bottom-transition"
            max-width="600"
        >
            <v-card>
                <v-toolbar
                    color="primary"
                    dark
                >
                    Отчет {{lead.name}}
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn
                            icon
                            dark
                            @click="dialog = false"
                        >
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-card-text>
                    <v-radio-group
                        v-model="delivered"
                        row
                    >
                        <v-radio
                            label="Доставлено"
                            value="0"
                            class="mb-1"
                        ></v-radio>
                        <v-radio
                            label="Не доставлено"
                            value="1"
                        ></v-radio>
                    </v-radio-group>
                    <v-textarea
                        v-model="comment"
                        outlined
                        label="Комментарий"
                    ></v-textarea>
                    <v-radio-group
                        v-if="delivered === '0'"
                        v-model="payment_type"
                        row
                    >
                        <v-radio
                            v-for="type in types"
                            :key="type.name"
                            :label="type.name"
                            :value="type.name"
                            class="mb-2"
                        ></v-radio>
                    </v-radio-group>
                    <v-text-field
                        v-if="payment_type !== 'Без оплаты'"
                        v-model="amount"
                        label="Сумма"
                        type="number"
                        outlined
                    ></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="closeDialog"
                    >
                        Закрыть
                    </v-btn>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="report"
                    >
                        Отправить
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
export default {
    name: "MyOrders",
    data: () => ({
        orders: [],
        dialog: false,
        lead: {},
        delivered: '0',
        comment: '',
        amount: null,
        payment_type: 'Без оплаты',
        types: []
    }),
    created() {
        this.fetchOrders()
    },
    computed: {
        isActive() {
            const d = new Date()
            let hour = d.getHours()
            return hour >= 5 && hour <= 10
        }
    },
    methods: {
        fetchOrders(){
            axios
                .get('/api/my-orders')
                .then(response => {
                    if (response.data.status){
                        this.orders = response.data.data
                        this.types = response.data.payment_types
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        },
        notify(id){
            axios
                .post('/api/my-orders/notify',{
                    order_id: id
                })
                .then(response => {
                    this.$store.dispatch('showAlert', {
                        'isVisible': true,
                        'msg': response.data.msg,
                        'color': response.status ? 'green' : 'error',
                        'type': response.status ? 'success' : 'error',
                    })
                    this.fetchOrders()
                })
                .catch(error => {
                    console.log(error)
                })
        },
        openDialog(order){
            this.lead = order
            this.dialog = true
        },
        report(){
            axios
                .post('/api/my-orders/report', {
                    status: this.delivered,
                    order_id: this.lead.id,
                    comment: this.comment,
                    amount: this.amount,
                    payment_type: this.payment_type,
                })
                .then(response => {
                    this.delivered = '0'
                    this.comment = ''
                    this.amount = null
                    this.payment_type = 'Без оплаты'
                    this.dialog = false
                    this.$store.dispatch('showAlert', {
                        'isVisible': true,
                        'msg': response.data.msg,
                        'color': response.status ? 'green' : 'error',
                        'type': response.status ? 'success' : 'error',
                    })
                    this.fetchOrders()
                })
                .catch(error => {
                    console.log(error)
                })
        },
        closeDialog(){
            this.dialog = false
            this.delivered = '0'
            this.comment = ''
            this.amount = null
            this.payment_type = 'Без оплаты'
        }
    }
}
</script>
