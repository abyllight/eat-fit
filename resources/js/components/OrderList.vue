<template>
    <v-container>
        <v-row class="mb-4">
            <a
                type="button"
                href="/api/list/export/"
            >
                <v-btn
                    color="primary"
                    @click="excel"
                >
                    Список - {{assigned}}/{{total}}
                </v-btn>
            </a>
        </v-row>
        <v-row
            v-for="courier in couriers"
            :key="courier.id"
            class="mb-8"
        >
            <div>
                <h3>{{ courier.name }} - {{ courier.orders.length }}</h3>
                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                        <tr>
                            <th class="text-left">
                                #
                            </th>
                            <th class="text-left">
                                Имя
                            </th>
                            <th class="text-left">
                                Тэг
                            </th>
                            <th class="text-left">
                                Телефон
                            </th>
                            <th class="text-left">
                                Время
                            </th>
                            <th class="text-left">
                                Адрес
                            </th>
                            <th class="text-left">
                                Комментарий
                            </th>
                        </tr>
                        </thead>
                        <draggable :id="courier.id" tag="tbody" group="orders" @end="log">
                            <tr
                                v-for="(order, index) in courier.orders"
                                :key="order.name"
                                :id="order.id"
                                class="r"
                            >
                                <td>{{ index + 1 }}</td>
                                <td :class="order.color">{{ order.name }}</td>
                                <td :class="order.color">{{ order.tag }}</td>
                                <td>{{ order.phone }}</td>
                                <td>{{ order.time }}</td>
                                <td>{{ order.yaddress }}</td>
                                <td>{{ order.logistic }}</td>
                            </tr>
                        </draggable>
                    </template>
                </v-simple-table>
            </div>
        </v-row>
    </v-container>
</template>

<script>
import draggable from 'vuedraggable'
export default {
    name: 'OrderList',
    components: {draggable},
    data: () => ({
        couriers: [],
        total: 0,
        assigned: 0
    }),
    mounted() {
        this.getData()
        this.fetchCouriers()
    },
    methods: {
        async getData(){
            await axios
                .get('/api/list/data')
                .then(response => {
                    this.total = response.data.total
                    this.assigned = response.data.assigned
                })
                .catch(error => {
                    console.log(error)
                })
        },
        async fetchCouriers() {
            this.couriers = []
            await axios
                .get('/api/couriers')
                .then(response => {
                    this.couriers = response.data.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        log(evt) {
            let order_id = evt.item.id
            let courier_id = evt.to.id
            let ids = []
            let array = this.$el.querySelectorAll('.r')

            array.forEach(function (item){
                ids.push(item.id)
            })

            axios
                .post('/api/list', {
                    order_id: order_id,
                    courier_id: courier_id,
                    ids: ids
                })
                .then(response => {
                   console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        excel(){
            axios
                .get('/api/list/export')
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>
