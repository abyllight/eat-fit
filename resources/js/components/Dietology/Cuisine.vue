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
                    :color="c.is_on_duty ? 'green' : c.purchase_duty ? 'amber' : 'grey'"
                >
                    <v-card-title>{{c.position}}. {{c.name}}</v-card-title>
                    <v-card-subtitle>{{c.is_on_duty ? c.date : c.purchase_duty ? c.purchase_date : ''}}</v-card-subtitle>
                    <v-card-actions>
                        <v-btn
                            color="white"
                            icon
                            @click="openFile(c)"
                        >
                            <v-icon>mdi-file</v-icon>
                        </v-btn>

                        <v-spacer></v-spacer>

                        <v-btn
                            icon
                            color="white"
                            @click="setDuty(c.id)"
                        >
                            <v-icon>mdi-star</v-icon>
                        </v-btn>
                        <v-btn
                            icon
                            color="white"
                            @click="setPurchase(c.id)"
                        >
                            <v-icon>mdi-cart</v-icon>
                        </v-btn>
                        <v-btn
                            color="white"
                            icon
                            @click="goToCuisineDishes(c.id)"
                        >
                            <v-icon>mdi-tune</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

        <!-- File modal  -->
        <v-row justify="center">
            <v-dialog
                v-model="dialog"
                persistent
                max-width="480"
            >
                <v-card>
                    <v-card-title class="text-h5 mb-4">
                        Файл для {{cuisine.name}}
                    </v-card-title>

                    <v-card-text class="mb-0 pb-0">

                        <a v-if="cuisine.file"
                           :href="/storage/+cuisine.file"
                           target="_blank"
                        >
                            {{cuisine.file}}
                        </a>

                        <v-file-input
                            class="mt-4"
                            v-model="file"
                            label="File input"
                            outlined
                            dense
                        ></v-file-input>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="red"
                            text
                            @click="dialog = false"
                        >
                            Закрыть
                        </v-btn>
                        <v-btn
                            color="green darken-1"
                            text
                            @click="saveFile"
                        >
                            Сохранить
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
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
            dialog: false,
            cuisine: {},
            file: null
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
                    .get('/api/cuisine/iiko')
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
            },
            setPurchase(id) {
                axios.post('/api/cuisine/purchase', {
                    id: id
                }).then(res => {
                    this.$store.dispatch('showAlert', {
                        isVisible: true,
                        msg: res.data.msg,
                        color: 'success',
                        type: 'success'
                    })
                    this.getCuisines()
                }).catch(err => {
                    console.log(err)
                })
            },
            openFile(cuisine) {
                this.cuisine = cuisine
                this.dialog = true
            },
            saveFile() {
                let dataForm = new FormData()
                dataForm.append('file', this.file)
                dataForm.append('_method', 'POST');

                axios({
                    method: 'POST',
                    url: '/api/cuisine/'+this.cuisine.id+'/file',
                    data: dataForm,
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                }).then(res => {
                    this.$store.dispatch('showAlert', {
                        isVisible: true,
                        msg: res.data.msg,
                        color: 'success',
                        type: 'success'
                    })
                    this.dialog = false
                    this.file = null
                    this.getCuisines()
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>
