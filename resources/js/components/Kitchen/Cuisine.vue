<template>
    <div>
        <!--  Fetch Cuisines -->
        <v-row>
            <v-btn
                class="ma-3"
                :loading="btn_loading"
                :disabled="disabled"
                color="primary"
                @click="fetchCuisines"
            >
                Получить Кухни
            </v-btn>
        </v-row>

        <!--  Cuisines -->
        <v-row>
            <v-col
                v-for="(group, key) in cuisines"
                :key="key"
                cols="12" md="3"
            >
                <h3 class="mb-4">Неделя #{{key}}</h3>

                <v-card
                    v-for="c in group"
                    :key="c.name"
                    class="mb-3"
                    :color="c.is_on_duty ? 'green': 'grey'"
                >
                    <v-card-title>{{c.position}}. {{c.name}}</v-card-title>
                    <v-card-actions>
                        <v-btn
                            color="white"
                            text
                            @click="goToCuisineDishes(c.id)"
                        >
                            Настроить
                        </v-btn>
                        <v-btn
                            color="white"
                            text
                            @click="setDuty(c.id)"
                        >
                            Назначить
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
    export default {
        name: 'Cuisine',
        data: () => ({
            cuisines: [],
            btn_loading: false,
            loading: false,
            disabled: false,
        }),
        created() {
            this.getCuisines()
        },
        methods: {
            async getCuisines() {
                await axios
                    .get('/api/cuisines')
                    .then(response => {
                        this.cuisines = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            setDuty(id) {
                axios
                    .post('/api/cuisine/duty', {
                        id: id
                    })
                    .then(response => {
                        this.getCuisines()
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            goToCuisineDishes(id) {
                this.$router.push({name: 'cuisine_dishes', params: {id: id}})
            },
            async fetchCuisines() {
                this.btn_loading = true
                this.disabled = true
                await axios
                    .get('/api/cuisines/iiko')
                    .then(response => {
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.msg,
                            'color': response.data.status ? 'green' : 'error',
                            'type': response.data.status ? 'success' : 'error',
                        })
                        this.getCuisines()
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    .finally(() => {
                        this.btn_loading = false
                        this.disabled = false
                    })
            }
        }
    }
</script>
