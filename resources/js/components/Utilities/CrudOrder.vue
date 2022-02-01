<template>
    <v-row justify="center">
        <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
        >
            <v-card>
                <v-toolbar dark color="primary">
                    <v-btn icon dark @click="close">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Заказ</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <v-container fluid>
                        <v-row>
                            <v-col sm="12" lg="4">
                                <h4 class="mb-3">Анкета</h4>
                                <v-select
                                    v-model="type"
                                    :items="products"
                                    item-text="name"
                                    item-value="id"
                                    label="Продукт"
                                    outlined
                                    :error-messages="errors.type"
                                ></v-select>
                                <v-select
                                    v-if="type === 1 || type === 2"
                                    v-model="size"
                                    :items="sizes"
                                    item-text="name"
                                    item-value="id"
                                    label="Размер"
                                    outlined
                                    :error-messages="errors.size"
                                ></v-select>
                                <v-text-field
                                    v-model="name"
                                    label="Имя"
                                    outlined
                                    :error-messages="errors.name"
                                >
                                </v-text-field>
                                <v-text-field
                                    v-model="phone"
                                    :error-messages="errors.phone"
                                    label="Телефон"
                                    outlined
                                    v-mask="'+7 (###) ###-##-##'"
                                    prepend-inner-icon="mdi-cellphone"
                                ></v-text-field>
                                <v-text-field
                                    v-model="whatsapp"
                                    :error-messages="errors.whatsapp"
                                    label="Whatsapp"
                                    outlined
                                    v-mask="'+7 (###) ###-##-##'"
                                    prepend-inner-icon="mdi-cellphone"
                                ></v-text-field>
                                <v-text-field
                                    v-if="isEatFit"
                                    v-model="day"
                                    label="День"
                                    type="number"
                                    outlined
                                    :error-messages="errors.day"
                                ></v-text-field>
                                <v-text-field
                                    v-if="isEatFit"
                                    v-model="course"
                                    label="Курс"
                                    type="number"
                                    outlined
                                    :error-messages="errors.course"
                                ></v-text-field>
                                <v-textarea
                                    v-if="type === 2"
                                    v-model="diet"
                                    label="Диета"
                                    outlined
                                    :error-messages="errors.diet"
                                ></v-textarea>
                            </v-col>
                            <v-col sm="12" lg="4">
                                <h4 class="mb-3">Адрес 1</h4>
                                <v-text-field
                                    v-model="yaddress1"
                                    label="Яндекс адрес"
                                    outlined
                                    :error-messages="errors.yaddress1"
                                ></v-text-field>
                                <v-text-field
                                    v-model="address1"
                                    label="Адрес"
                                    outlined
                                    :error-messages="errors.address1"
                                ></v-text-field>
                                <v-textarea
                                    v-model="logistic"
                                    label="Комментарий"
                                    outlined
                                    :error-messages="errors.logistic"
                                ></v-textarea>
                                <v-dialog
                                    ref="start"
                                    v-model="timeModal1"
                                    :return-value.sync="time1_start"
                                    persistent
                                    width="290px"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                            v-model="time1_start"
                                            label="С"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                            outlined
                                        ></v-text-field>
                                    </template>
                                    <v-time-picker
                                        v-if="timeModal1"
                                        v-model="time1_start"
                                        full-width
                                    >
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="timeModal1 = false"
                                        >
                                            Cancel
                                        </v-btn>
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="$refs.start.save(time1_start)"
                                        >
                                            OK
                                        </v-btn>
                                    </v-time-picker>
                                </v-dialog>
                                <v-dialog
                                    ref="end"
                                    v-model="timeModal2"
                                    :return-value.sync="time1_end"
                                    persistent
                                    width="290px"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                            v-model="time1_end"
                                            label="До"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                            outlined
                                        ></v-text-field>
                                    </template>
                                    <v-time-picker
                                        v-if="timeModal2"
                                        v-model="time1_end"
                                        full-width
                                    >
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="timeModal2 = false"
                                        >
                                            Cancel
                                        </v-btn>
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="$refs.end.save(time1_end)"
                                        >
                                            OK
                                        </v-btn>
                                    </v-time-picker>
                                </v-dialog>
                            </v-col>
                            <v-col v-if="isEatFit" sm="12" lg="4">
                                <h4 class="mb-3">Адрес 2</h4>
                                <v-text-field
                                    v-model="yaddress2"
                                    label="Яндекс адрес"
                                    outlined
                                    :error-messages="errors.yaddress2"
                                ></v-text-field>
                                <v-text-field
                                    v-model="address2"
                                    label="Адрес"
                                    outlined
                                    :error-messages="errors.address2"
                                ></v-text-field>
                                <v-dialog
                                    ref="start2"
                                    v-model="timeModal3"
                                    :return-value.sync="time2_start"
                                    persistent
                                    width="290px"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                            v-model="time2_start"
                                            label="С"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                            outlined
                                        ></v-text-field>
                                    </template>
                                    <v-time-picker
                                        v-if="timeModal3"
                                        v-model="time2_start"
                                        full-width
                                    >
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="timeModal3 = false"
                                        >
                                            Cancel
                                        </v-btn>
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="$refs.start2.save(time2_start)"
                                        >
                                            OK
                                        </v-btn>
                                    </v-time-picker>
                                </v-dialog>
                                <v-dialog
                                    ref="end2"
                                    v-model="timeModal4"
                                    :return-value.sync="time2_end"
                                    persistent
                                    width="290px"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                            v-model="time2_end"
                                            label="До"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                            outlined
                                        ></v-text-field>
                                    </template>
                                    <v-time-picker
                                        v-if="timeModal4"
                                        v-model="time2_end"
                                        full-width
                                    >
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="timeModal4 = false"
                                        >
                                            Cancel
                                        </v-btn>
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="$refs.end2.save(time2_end)"
                                        >
                                            OK
                                        </v-btn>
                                    </v-time-picker>
                                </v-dialog>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-btn
                                    color="primary"
                                    @click="save"
                                >
                                    Сохранить
                                </v-btn>
                            </v-col>
                            <v-col>
                                <v-btn
                                    color="red"
                                    dark
                                    @click="deactivate"
                                >
                                    Деактивировать
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
export default {
    name: "CrudOrder",
    props: {
        dialog: Boolean,
        link: String,
        id: Number,
        isEdit: Boolean
    },
    data: () => ({
        products: [
            {
                id: 1,
                name: 'Lite'
            },
            {
                id: 2,
                name: 'Select'
            },
            {
                id: 3,
                name: 'Detox'
            },
            {
                id: 4,
                name: 'Go'
            },
            {
                id: 5,
                name: 'Chill'
            },
            {
                id: 6,
                name: 'Cakes'
            }
        ],
        sizes: [
            {
                id: 1,
                name: 'XS'
            },
            {
                id: 2,
                name: 'S'
            },
            {
                id: 3,
                name: 'M'
            },
            {
                id: 4,
                name: 'L'
            },
            {
                id: 5,
                name: 'XL'
            },
            {
                id: 6,
                name: 'EAT'
            }
        ],
        type: null,
        size: null,
        name: null,
        phone: null,
        whatsapp: null,
        day: null,
        course: null,
        diet: null,
        time1_start: null,
        time2_start: null,
        time1_end: null,
        time2_end: null,
        yaddress1: null,
        yaddress2: null,
        address1: null,
        address2: null,
        logistic: null,
        timeModal1: false,
        timeModal2: false,
        timeModal3: false,
        timeModal4: false,
        errors: []
    }),
    computed:{
        isEatFit(){
            return this.type === 1 || this.type === 2 || this.type === 3
        },
        method(){
            return this.isEdit ? 'PATCH' : 'POST'
        },
        action_link(){
            return this.isEdit ? this.link + this.id : this.link
        }
    },
    methods: {
        async fetchOrder(id){
            if (id === null) return

            await axios.get('/api/order/'+ id)
                    .then(response => {
                        if (!response.data.status){
                            this.$store.dispatch('showAlert', {
                                'isVisible': true,
                                'msg': response.data.msg,
                                'color': response.data.status ? 'green' : 'error',
                                'type': response.data.status ? 'success' : 'error'
                            })
                        }else{
                            let order = response.data.order
                            this.type = order.type
                            this.size = order.size
                            this.name = order.name
                            this.phone = order.phone
                            this.whatsapp = order.whatsapp
                            this.day = order.day
                            this.course = order.course
                            this.diet = order.diet
                            this.yaddress1 = order.yaddress1
                            this.address1 = order.address1
                            this.logistic = order.logistic
                            if (order.time1 != null){
                                const t1 = order.time1.split("-");
                                this.time1_start = t1[0]
                                this.time1_end = t1[1]
                            }
                            this.yaddress2 = order.yaddress2
                            this.address2 = order.address2
                            if (order.time2 != null){
                                const t2 = order.time2.split("-");
                                this.time2_start = t2[0]
                                this.time2_end = t2[1]
                            }
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
        },
        close() {
            this.errors = []
            this.$emit('close')
        },
        save(){
            let params = {
                name: this.name,
                phone: this.phone,
                whatsapp: this.whatsapp,
                type: this.type,
                size: this.size,
                day: this.day,
                course: this.course,
                yaddress1: this.yaddress1,
                yaddress2: this.yaddress2,
                address1: this.address1,
                address2: this.address2,
                logistic: this.logistic,
                time1_start: this.time1_start,
                time2_start: this.time2_start,
                time1_end: this.time1_end,
                time2_end: this.time2_end
            }

            axios({
                method: this.method,
                url: this.action_link,
                data: params
            }).then(response => {
                this.$emit('refresh')
                this.$store.dispatch('showAlert', {
                    'isVisible': true,
                    'msg': response.data.msg,
                    'color': response.data.status ? 'green' : 'error',
                    'type': response.data.status ? 'success' : 'error'
                })
            }).catch(error => {
                this.errors = error.response.data.errors
            })
        },
        deactivate(){
            axios.post('/api/order/'+this.id+'/deactivate')
                .then(response => {
                    this.$emit('refresh')
                    this.$store.dispatch('showAlert', {
                        'isVisible': true,
                        'msg': response.data.msg,
                        'color': response.data.status ? 'green' : 'error',
                        'type': response.data.status ? 'success' : 'error'
                    })
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>
