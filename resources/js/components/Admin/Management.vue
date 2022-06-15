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

        <v-row justify="center">
            <v-dialog v-model="prompt" max-width="500px">
                <v-card>
                    <v-card-title class="text-h5">Вы уверены, что хотите удалить роль?</v-card-title>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="close">Отмена</v-btn>
                        <v-btn color="blue darken-1" text @click="doAction">ДА</v-btn>
                        <v-spacer></v-spacer>
                    </v-card-actions>
                </v-card>
            </v-dialog>
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
        loading: false,
        prompt: false,
        type: 1,
        link: '/api/management/plus-one'
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
                    console.log(err)
            })
        },
        doAction() {
            this.loading = true

            axios.post(this.link)
                .then(res => {
                    this.loading = false

                    this.$store.dispatch('showAlert', {
                        isVisible: true,
                        msg: res.data.msg,
                        color: 'success',
                        type: 'success'
                    })

                    location.reload()
                }).catch(err => {
                    console.log(err)
            })
        },
        plusOne() {
            this.link = '/api/management/plus-one'
            this.type = 1
            this.prompt = true
        },
        shiftTrial() {
            this.link = '/api/management/trial'
            this.type = 2
            this.prompt = true
        },
        shiftWork() {
            this.link = '/api/management/work'
            this.type = 3
            this.prompt = true
        },
        close() {
            this.prompt = false
        }
    }
}
</script>
