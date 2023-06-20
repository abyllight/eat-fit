<template>
    <div>
        <v-row>
            <v-col class="d-flex justify-space-between">
                <h3>{{cuisine}}</h3>
                <v-btn v-if="isActive" @click="dialog=true" color="primary" :loading="loading" :disabled="loading">Отправить</v-btn>
            </v-col>
        </v-row>

        <v-row>
            <v-col
                v-for="item in items"
                :key="item.name"
                cols="3"
            >
                <v-card>
                    <v-card-title>{{item.name}}</v-card-title>
                    <v-card-text v-html="item.text">
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <v-row justify="center">
            <v-dialog v-model="dialog" max-width="500px">
                <v-card>
                    <v-card-title class="text-h5">Вы уверены, что хотите продолжить действие?</v-card-title>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog=false">Отмена</v-btn>
                        <v-btn color="blue darken-1" text @click="send">ДА</v-btn>
                        <v-spacer></v-spacer>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "BroadcastMenu",
    data: () => ({
        items: [],
        cuisine: '',
        dialog: false,
        loading: false
    }),
    mounted() {
        this.getItems()
    },
    computed: {
        isActive() {
            const d = new Date()
            let hour = d.getHours()
            let minute = d.getMinutes()
            return hour >= 17 && minute >= 0 && hour <= 18 && minute <= 40
        }
    },
    methods: {
        getItems() {
            axios.get('/api/broadcast-select')
                .then(res => {
                    this.cuisine = res.data.cuisine
                    this.items = res.data.data
                })
        },
        send() {
            this.dialog = false
            this.loading = true

            axios.post('/api/broadcast-select')
                .then(res => {
                    console.log(res)
                    this.loading = false
                })
        }
    }
}
</script>
