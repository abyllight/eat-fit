<template>
    <div>
        <v-container fluid>
            <v-row>
                <h2>{{cuisine.name}}</h2>
            </v-row>
            <v-row>
                <v-col sm="4" md="2" lg="3">
                    <v-list dense>
                        <v-subheader>Select</v-subheader>
                        <v-list-item-group
                            color="primary"
                        >
                            <v-list-item
                                v-for="(order, i) in orders"
                                :key="i"
                                @click=""
                            >
                                <v-list-item-content>
                                    <v-list-item-title>{{i+1}}. {{order.size}} - {{order.name}}</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-col>
                <v-col sm="8" md="10" lg="9" v-if="Object.keys(order).length > 0">
                    <v-row>
                        <v-col>
                            <v-card @click="openSelect(rations[0])">
                                <v-card-title>{{rations[0].name}}</v-card-title>
                                <v-card-subtitle>{{order.select}}</v-card-subtitle>
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card @click="openSelect(rations[1])">
                                <v-card-title>{{rations[1].name}}</v-card-title>
                                <v-card-subtitle>{{order.select}}</v-card-subtitle>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
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
                        <v-toolbar-title>{{order.name}} {{order.tag}} - {{ration.name}}</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-toolbar-items>
                            <v-btn
                                dark
                                text
                                @click=""
                            >
                                Сохранить
                            </v-btn>
                        </v-toolbar-items>
                    </v-toolbar>
                    <v-card-text>
                        <v-container fluid>
                            <v-row>
                                <v-col
                                    sm="12"
                                    lg="3"
                                    v-if="yesterday"
                                >
                                    <h4>Вчера</h4>
                                    <span>{{yesterday.cuisine}}</span>
                                    <v-list v-if="yesterday" dense>
                                        <v-subheader>{{yesterday.dish}}</v-subheader>
                                        <v-list-item
                                            v-for="(ing, i) in yesterday.ingredients"
                                            :key="i"
                                        >
                                            <v-list-item-content>
                                                <v-list-item-title>{{i+1}}. {{ing.name}}</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list>
                                </v-col>
                                <v-col
                                    sm="12"
                                    :lg="yesterday ? 9 : 12"
                                >
                                    <h4>Сегодня</h4>
                                    <span>{{cuisine.name}}</span>
                                </v-col>
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
    name: "Select",
    data: () => ({
        orders: [],
        order: {},
        ration: {},
        cuisine: {},
        categories: [],
        ingredients: [],
        dishes: [],
        rations: [],
        dialog: false,
        yesterday: []
    }),
    created() {
        this.getOrders()
        this.getCuisine()
    },
    methods: {
        async getOrders(){
            await axios
                .get('/api/orders/select-orders')
                .then(response => {
                    this.orders = response.data.data
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
        async getCuisine(){
            await axios
                .get('/api/cuisine/duty')
                .then(response => {
                    this.cuisine = response.data
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
        showDetails(order){
            this.order = order
        },
        close(){
            this.dialog = false
        },
        openSelect(ration){
            this.ration = ration
            this.yesterday = this.order.yesterday.find(item => {
                return item.time === ration.position
            })
            this.dialog = true
        }
    }
}
</script>
