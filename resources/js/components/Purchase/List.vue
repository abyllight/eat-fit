<template>
    <div>
        <v-row>
            <v-col>
                <h1 class="">{{purchase.cuisine}} - {{purchase.date}}</h1>

            </v-col>
        </v-row>
        <v-row
            v-for="(i, key) in purchase.ingredients"
            v-if="i.diff > 0"
            :key="i.id"
        >
            <v-col cols="1">
                <v-checkbox
                    v-model="i.is_done"
                    @change="done(i)"
                ></v-checkbox>
            </v-col>
            <v-col cols="11">
                <v-card
                    :disabled="i.is_done === 1"
                    :color="i.is_done === 1 ? 'grey lighten-1' : ''">
                    <v-card-text>
                        <v-row>
                            <v-col cols="12" md="6">
                                <h3>{{key+1}}. {{i.name}}</h3>
                            </v-col>
                            <v-col cols="6" sm="4">
                                <h5 class="text-uppercase">Нужно взять:</h5>
                                <h2 class="">{{i.diff}}</h2>
                            </v-col>
<!--                            <v-col sm="1">
                                <v-btn icon @click="openModal">
                                    <v-icon>
                                        mdi-settings
                                    </v-icon>
                                </v-btn>
                            </v-col>-->
                            <v-col v-if="i.providers.length > 0" sm="1">
                                <v-btn icon color="green" dark @click="openWhatsapp(i)">
                                    <v-icon>
                                        mdi-whatsapp
                                    </v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <v-row justify="center">
            <v-dialog
                v-model="modal"
                scrollable
                max-width="500px"
            >
                <v-card>
                    <v-card-title>{{item.name}}</v-card-title>
                    <v-divider></v-divider>

                    <v-card-text>
                        <v-row>
                            <v-col>
                                <v-select
                                    v-model="provider.id"
                                    :items="item.providers"
                                    item-text="name"
                                    item-value="id"
                                    outlined
                                    class="mt-5"
                                >
                                </v-select>
                                <v-textarea
                                    v-model="msg"
                                    outlined
                                    clearable
                                >
                                </v-textarea>
                            </v-col>
                        </v-row>
                    </v-card-text>

                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="modal = false"
                        >
                            Закрыть
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="blue darken-1"
                            text
                            :href="`https://api.whatsapp.com/send?phone=${provider.phone}&text=${encodeURIComponent(this.msg)}`"
                            target="_blank"
                            @click="modal = false"
                        >
                            Отправить
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "List",
    data: () => ({
        purchase: {},
        loading: false,
        modal: false,
        item: {},
        msg: null,
        provider: {}
    }),
    mounted() {
        this.fetchIngredients()
    },
    methods: {
        fetchIngredients() {
            axios.get('/api/purchase-list-kitchen')
                .then(response => {
                    this.purchase = response.data
                }).catch(error => {
                console.log(error)
            })
        },
        openWhatsapp(i) {
            this.item = i
            this.provider = i.providers[0]
            this.modal = true
            this.msg = i.name + ' - ' + i.diff
        },
        done(i) {
            axios.post('/api/purchase-list-kitchen/done', {
                i_id: i.id,
                p_id: this.purchase.id
            }).then(res => {
                this.modal = false
                this.item = {}
                this.fetchIngredients()
            }).catch(err => {
                console.log(err)
            })
        }
    }
}
</script>
