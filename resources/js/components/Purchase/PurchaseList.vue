<template>
    <div>
        <v-row>

        </v-row>
    </div>
</template>

<script>
export default {
    name: "PurchaseList",
    data: () => ({
        ingredients: []
    }),
    mounted() {
        this.fetchIngredients()
    },
    methods: {
        fetchIngredients() {
            axios.get('/api/purchase-list')
                .then(response => {
                    console.log(response)
                }).catch(error => {
                    console.log(error)
            })
        }
    }
}
</script>
