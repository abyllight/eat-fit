<template>
    <div>
        <v-row>
            <v-col cols="12" md="10">
                <div class="d-flex align-center justify-space-between mb-10">
                    <h1 class="">{{purchase.cuisine}} - {{purchase.date}}</h1>
                    <v-btn color="primary" @click="calculatePurchase" :loading="loading" :disabled="loading">
                        Get
                    </v-btn>
                </div>
                <v-sheet
                    v-for="(i, key) in purchase.ingredients"
                    :key="i.id"
                    class="mb-8 px-4"
                    rounded
                    color="grey lighten-3"
                >
                    <v-row align="center">
                        <v-col>
                            {{key+1}}. {{i.name}}
                        </v-col>
                        <v-col cols="2">
                            <v-text-field
                                type="number"
                                clearable
                            ></v-text-field>
                        </v-col>
                        <v-col cols="2">
                            <strong class="ml-4">{{i.total}}</strong>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "PurchaseList",
    data: () => ({
        purchase: {},
        loading: false
    }),
    mounted() {
        this.fetchIngredients()
    },
    methods: {
        fetchIngredients() {
            axios.get('/api/purchase-list')
                .then(response => {
                    this.purchase = response.data
                }).catch(error => {
                    console.log(error)
            })
        },
        async calculatePurchase() {
            this.loading = true
            await axios.get('/api/purchase-list/calculate')
                .then(res => {
                    this.$store.dispatch('showAlert', {
                        isVisible: true,
                        msg: res.data.msg,
                        color: 'success',
                        type: 'success'
                    })
                    this.loading = false
                    this.fetchIngredients()
                })
                .catch(err => {})
        }
    }
}
</script>
