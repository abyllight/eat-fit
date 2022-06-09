<template>
    <div>
        <v-row>
            <v-col>
                <v-btn
                    :disabled="plus"
                    @click="plusOne"
                    class="mr-10"
                    color="green"
                    :dark="!plus"
                    :loading="loading"
                >
                    +1
                    <v-icon
                        v-if="plus"
                        right
                        dark
                    >
                        mdi-check
                    </v-icon>
                </v-btn>
                <v-btn
                    :disabled="trial"
                    @click="shiftTrial"
                    class="mr-10"
                    color="indigo"
                    :dark="!trial"
                    :loading="loading"
                >
                    Закрытие смены(Пробный)
                    <v-icon
                        v-if="trial"
                        right
                        dark
                    >
                        mdi-check
                    </v-icon>
                </v-btn>
                <v-btn
                    :disabled="work"
                    @click="shiftWork"
                    color="indigo"
                    :dark="!work"
                    :loading="loading"
                >
                    Закрытие смены(В работе)
                    <v-icon
                        v-if="work"
                        right
                        dark
                    >
                        mdi-check
                    </v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "Management",
    data: () => ({
        plus: true,
        trial: true,
        work: true,
        loading: false
    }),
    mounted() {
        this.index()
    },
    methods: {
        index() {
            axios.get('/api/management')
                .then(res => {
                    this.plus = res.data.plus
                    this.trial = res.data.trial
                    this.work = res.data.work
                }).catch(err => {

            })
        },
        plusOne() {
            this.loading = true

            axios.post('/api/management/plus-one')
                .then(res => {
                    this.loading = false
                    this.$store.dispatch('showAlert', {
                        isVisible: true,
                        msg: res.data.msg,
                        color: 'success',
                        type: 'success'
                    })
                }).catch(err => {

            })
        },
        shiftTrial() {
            this.loading = true

            axios.post('/api/management/trial')
                .then(res => {
                    this.loading = false

                    this.$store.dispatch('showAlert', {
                        isVisible: true,
                        msg: res.data.msg,
                        color: 'success',
                        type: 'success'
                    })
                }).catch(err => {

            })
        },
        shiftWork() {
            this.loading = true

            axios.post('/api/management/work')
                .then(res => {
                    this.loading = false

                    this.$store.dispatch('showAlert', {
                        isVisible: true,
                        msg: res.data.msg,
                        color: 'success',
                        type: 'success'
                    })
                }).catch(err => {

            })
        }
    }
}
</script>
