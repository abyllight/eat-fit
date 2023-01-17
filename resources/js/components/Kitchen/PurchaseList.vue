<template>
    <div>
        <v-row>
            <v-col cols="12">
                <div class="d-flex align-center justify-space-between mb-10">
                    <h1 class="">{{purchase.cuisine}} - {{purchase.date}}</h1>
                    <v-btn color="primary" @click="calculatePurchase" :loading="loading" :disabled="loading">
                        Get
                    </v-btn>
                </div>
            </v-col>
        </v-row>

        <v-btn
            color="pink"
            dark
            fixed
            bottom
            right
            fab
            @click="dialog = true"
        >
            <v-icon>mdi-plus</v-icon>
        </v-btn>

        <v-row
            v-for="(i, key) in purchase.ingredients"
            :key="i.id"
        >
            <v-col>
                <v-btn
                    v-if="i.is_custom"
                    icon
                    color="red"
                    @click="removeIngredient(i.id)"
                >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-col>
            <v-col cols="11">
                <v-card
                    class="mb-4"
                    @click="openModal(i)"
                    :color="!i.diff ? 'grey lighten-1' : ''"
                >
                    <v-card-text>
                        <v-row>
                            <v-col cols="12" md="4">
                                <h3>{{key+1}}. {{i.name}}</h3>
                            </v-col>
                            <v-col cols="6" md="2">
                                <h5 class="text-uppercase">Остаток:</h5>
                                <strong class="blue--text">{{i.left}}</strong>
                            </v-col>
                            <v-col cols="6" md="2">
                                <h5 class="text-uppercase">Экстра:</h5>
                                <strong class="blue--text">{{i.extra}}</strong>
                            </v-col>
                            <v-col cols="6" md="2">
                                <h5 class="text-uppercase">Итого:</h5>
                                <strong v-if="i.left!=null" class="red--text">{{i.total}}</strong>
                            </v-col>
                            <v-col cols="6" md="2" class="elevation-3 blue-grey lighten-5">
                                <h5 class="text-uppercase">Нужно взять:</h5>
                                <strong class="green--text">{{i.diff}}</strong>
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
                                <v-text-field
                                    v-model="left"
                                    outlined
                                    clearable
                                    class="mt-5"
                                    type="number"
                                    label="Остаток"
                                >
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-text-field
                                    v-model="extra"
                                    outlined
                                    clearable
                                    class="mt-5"
                                    type="number"
                                    label="Экстра"
                                >
                                </v-text-field>
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
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="save"
                        >
                            Сохранить
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>

        <v-row justify="center">
            <v-dialog
                v-model="dialog"
                scrollable
                persistent
                max-width="500px"
            >
                <v-card>
                    <v-card-title>Добавить ингредиенты</v-card-title>
                    <v-divider></v-divider>

                    <v-card-text>
                        <v-row>
                            <v-col>
                                <v-autocomplete
                                    v-model="chosen"
                                    :items="ingredients"
                                    item-value="id"
                                    item-text="name"
                                    outlined
                                    clearable
                                    multiple
                                    chips
                                    class="mt-5"
                                >
                                </v-autocomplete>
                            </v-col>
                        </v-row>
                    </v-card-text>

                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="dialog = false"
                        >
                            Закрыть
                        </v-btn>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="addIngredients"
                            :disabled="chosen.length === 0"
                        >
                            Добавить
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "PurchaseList",
    data: () => ({
        purchase: {},
        loading: false,
        modal: false,
        item: {},
        left: null,
        extra: null,
        dialog: false,
        ingredients: [],
        chosen: []
    }),
    mounted() {
        this.fetchIngredients()
        this.getIngredients()
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
        async getIngredients(){
            await axios
                .get('/api/ingredients')
                .then(response => {
                    this.ingredients = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        async calculatePurchase() {
            this.loading = true
            await axios.get('/api/purchase-list-kitchen/calculate')
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
        },
        openModal(item) {
            this.modal = true
            this.item = item
            this.left = item.left
            this.extra = item.extra
        },
        save() {
            axios.post('/api/purchase-list-kitchen/left', {
                i_id: this.item.id,
                p_id: this.purchase.id,
                left: this.left,
                extra: this.extra
            }).then(res => {
                this.$store.dispatch('showAlert', {
                    isVisible: true,
                    msg: res.data.msg,
                    color: 'success',
                    type: 'success'
                })

                this.modal = false
                this.item = {}
                this.fetchIngredients()
            }).catch(err => {
                console.log(err)
            })
        },
        addIngredients() {
            axios.post('/api/purchase-list-kitchen/set/ingredients', {
                p_id: this.purchase.id,
                ingredients: this.chosen
            })
                .then(res => {
                    this.dialog = false
                    this.fetchIngredients()
                })
                .catch(err => {
                    console.log(err)
                })
        },
        removeIngredient(id) {
            axios.post('/api/purchase-list-kitchen/remove/ingredient', {
                p_id: this.purchase.id,
                i_id: id
            })
                .then(res => {
                    this.fetchIngredients()
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
}
</script>
