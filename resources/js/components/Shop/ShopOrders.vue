<template>
    <div>
        <v-row>
            <v-col
                v-for="(customer, index) in customers"
                :key="customer.id"
                cols="12"
                sm="4"
            >
                <v-card>
                    <div class="d-flex align-start justify-space-between">
                        <div>
                            <v-card-title>{{customer.name}}</v-card-title>
                            <v-card-subtitle>
                                Количество заказов: {{customer.items.length}}
                            </v-card-subtitle>
                        </div>
                        <div><v-card-title>{{index+1}}</v-card-title></div>
                    </div>
                    <v-divider></v-divider>
                    <v-list
                        subheader
                        dense
                    >
                        <v-list-item v-for="item in customer.items" :key="item.id">
                            <v-list-item-content>
                                <v-list-item-title>{{item.name}}</v-list-item-title>
                                <v-list-item-subtitle>{{item.date}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "ShopOrders",
    data: () => ({
        customers: []
    }),
    mounted() {
        this.getCustomers()
    },
    methods: {
        async getCustomers() {
            await axios.get('/api/customer-orders')
                .then(response => {
                    console.log(response)
                    this.customers = response.data
                })
        }
    }
}
</script>
