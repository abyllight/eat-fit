<template>
    <div>
        <v-row>
            <v-col class="d-flex justify-space-between">
                <stat :stat="stat"/>
                <a
                    type="button"
                    href="/api/select/export/stickers"
                >
                    <v-btn
                        color="primary"
                    >
                        Excel
                    </v-btn>
                </a>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <h2>{{cuisine.name}}</h2>
            </v-col>
        </v-row>

        <v-row
            v-for="(order, index) in orders"
            :key="index"
            style="border-bottom: 1px solid grey"
            class="mb-10"
        >
            <v-col cols="2">
                <p class="mb-0 text-sm-body-2">{{order[0].order_tag}}</p>
                <p class="text-sm-body-2 font-weight-bold">{{order[0].order_name}}</p>
            </v-col>

            <v-col>
                <v-row>
                    <v-col cols="12" md="3" v-for="o in order" :key="o.name">
                        <v-card
                            :color="o.done ? 'teal' : o.color"
                            style="cursor:pointer;"
                            :dark="o.done === 1"
                            @click="openDialog(o)"
                        >
                            <v-card-text>
                                <div class="d-flex justify-space-between mb-3">
                                    <p v-if="o.is_active" class="text-sm-body-2 mb-0">{{o.ration.name}}</p>
                                    <v-icon v-if="o.done" class="mb-2">mdi-check</v-icon>
                                </div>
                                <h2 class="mb-2">{{o.code}}</h2>
                                <p class="mb-2">{{o.dish_name}}</p>
                                <p class="font-weight-bold">{{o.weight}}гр</p>
                            </v-card-text>
                        </v-card>

                        <v-btn
                            v-if="o.is_active"
                            class="mt-3"
                            color="teal"
                            dark
                            block
                            @click="done(o)"
                        >
                            сделано
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-row justify="space-around">
            <v-col cols="auto">
                <v-dialog
                    v-model="dialog"
                    max-width="720"
                >
                    <v-card>
                        <v-toolbar
                            color="primary"
                            dark
                        >
                            {{order.order_name}}
                            <v-spacer></v-spacer>
                            <v-btn
                                icon
                                dark
                                @click="dialog = false"
                            >
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                        </v-toolbar>
                        <v-card-title>{{order.dish_name}}</v-card-title>
                        <v-card-subtitle>{{order.ration.name}}</v-card-subtitle>
                        <v-card-text>
                            <v-row>
                                <v-col>
                                    <v-sheet
                                        v-for="(i, index) in order.ingredients"
                                        :key="i.name"
                                        class="mb-2"
                                    >
                                        <strong>{{index+1}}.</strong>
                                        {{i.name}}
                                    </v-sheet>
                                </v-col>

                                <v-col>
                                    <div v-if="order.weight" class="mb-3 rounded pa-2" style="border:1px solid grey">
                                        <h4>Вес:</h4>
                                        {{order.weight}} грамм
                                    </div>

                                    <div v-if="order.description" class="mb-3 rounded pa-2" style="border:1px solid grey">
                                        <h4>Описание:</h4>
                                        {{order.description}}
                                    </div>

                                    <div v-if="order.wishlist.length > 0" class="mb-3 rounded pa-2" style="border:1px solid darkseagreen">
                                        <h4>Хотелки:</h4>
                                        <p class="mb-0" v-for="(w, index) in order.wishlist" :key="w.id">
                                            <strong>{{index+1}}.</strong> {{w.wish}}
                                        </p>
                                    </div>

                                    <div v-if="order.tableware" class="mb-3 rounded pa-2" style="border:1px solid dodgerblue">
                                        <h4>Посуда:</h4>
                                        <p class="mb-1">{{order.tableware.name}}</p>
                                        <img :src="/storage/+order.tableware.img" width="100"/>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-dialog>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import axios from "axios";
import Stat from "../Dietology/Stat.vue";

export default {
    name: "Grid",
    components: {Stat},
    data: () => ({
        loading: false,
        isSelect: true,
        orders: [],
        stat: {},
        rations: [],
        cuisine: {},
        dialog: false,
        order: {
            ration: {},
            tableware: {},
            wishlist: []
        },
        ration: {}
    }),
    mounted() {
        this.getSelects()
        this.getStat()
        this.getCuisine()
    },
    methods: {
        async getSelects() {
            await axios
                .get('/api/select/all')
                .then(response => {
                   this.orders = response.data
                })
                .catch(error => {
                    this.$store.dispatch('showAlert', {
                        'isVisible': true,
                        'msg': error.message,
                        'color': 'error',
                        'type': 'error'
                    })
                })
                .finally(() => (this.loading = false))
        },
        async getStat() {
            await axios
                .get('/api/orders/select')
                .then(response => {
                    this.stat = response.data.stat
                })
                .catch(error => {
                    this.$store.dispatch('showAlert', {
                        'isVisible': true,
                        'msg': error.message,
                        'color': 'error',
                        'type': 'error'
                    })
                })
                .finally(() => (this.loading = false))
        },
        async getCuisine(){
            await axios
                .get('/api/cuisine/duty')
                .then(response => {
                    this.cuisine = response.data.cuisine
                    this.rations = response.data.dishes
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
        openDialog(order) {
            if (!order.is_active) return
            this.order = order
            console.log(order)
            this.dialog = true
        },
        done(order) {
            axios
                .post('/api/select/'+order.id+'/done')
                .then(res => {
                    this.getSelects()
                })
        },
        exportStickers() {

        }
    }
}
</script>
