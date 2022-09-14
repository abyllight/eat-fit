<template>
    <div>
        <p v-if="rations.length === 0">Пусто</p>
        <v-row v-else>
            <v-col
                v-for="r in rations"
                :key="r.ration"
                cols="12"
                sm="4"
            >
                <v-sheet
                    class="d-flex flex-column align-center justify-center text-center pa-5"
                    style="cursor: pointer"
                    color="blue-grey lighten-5"
                    elevation="2"
                    rounded
                    @click="openDetails(r.ration_id)"
                >
                    <h1 class="display-1 mb-5">{{r.ration}}</h1>
                    <h1 class="display-1 font-weight-bold">{{r.items.length}}</h1>
                </v-sheet>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "SelectRations",
    data: () => ({
        rations: [],
        dialog: false,
        item: {},
        ingredients: []
    }),
    created() {
        this.generateCode()
        this.getList()
    },
    methods: {
        generateCode() {
            axios.get('/api/select/generate-code')
                .then(response => {
                }).catch(error => {
                console.log(error)
            })
        },
        async getList() {
            await axios.get('/api/select/rations')
                .then(response => {
                    this.rations = response.data
                }).catch(error => {
                    console.log(error)
                })
        },
        openDetails(id) {
            this.$router.push({name: 'stickers', params: {id: id}})
        },
    }
}
</script>
