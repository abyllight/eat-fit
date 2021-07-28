<template>
    <div>
        <v-row>
            <v-btn
                class="ma-3"
                :loading="iiko_loading"
                :disabled="iiko_loading"
                color="primary"
                @click="fetchCuisines"
            >
                Получить данные
            </v-btn>

        </v-row>
        <v-row>
            <v-col cols="12">
                <v-data-table
                    :headers="headers"
                    :items="cuisines"
                    :loading="loading"
                    class="elevation-1"
                    @click:row="showDetails"
                >
                    <template v-slot:item.index="{ index }">
                        {{ index + 1 }}
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
    </div>
</template>
<script>
    export default {
        name: 'Cuisine',
        data: () => ({
            iiko_loading: false,
            cuisines: [],
            loading: true,
            headers: [
                { text: '#', value: 'index' },
                {
                    text: 'Название',
                    align: 'start',
                    sortable: true,
                    value: 'name',
                }
            ],
        }),
        mounted() {
            this.getCuisines()
        },
        methods: {
            async getCuisines() {
                await axios
                    .get('/api/cuisines')
                    .then(response => {
                        this.cuisines = response.data.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    .finally(() => (this.loading = false))
            },
            showDetails(index){
                console.log(index)
            },
            async fetchCuisines() {
                /*this.iiko_loading = true
                await axios
                    .get('/api/webhook')
                    .then(response => {
                        console.log(response)
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    .finally(() => (this.iiko_loading = false))*/
                this.iiko_loading = true

                await axios
                    .get('/api/iiko/cuisines')
                    .then(response => {
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.msg,
                            'color': response.status ? 'green' : 'error',
                            'type': response.status ? 'success' : 'error',
                        })

                        this.getCuisines()
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    .finally(() => (this.iiko_loading = false))
            },
        }
    }
</script>
