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
                    <v-toolbar-title>{{title}}</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <v-container fluid>
                        <v-row>
                            <v-col sm="12" lg="4" offset-lg="4">
                                <component
                                    v-for="model in models"
                                    :key="model.model"
                                    v-model="model.value"
                                    :is="model.type"
                                    :label="model.label"
                                    :error-messages="errors[model.model]"
                                    v-mask="model.model === 'phone' ? '+7 (###) ###-##-##' : ''"
                                    :chips="model.chips"
                                    :items="model.items"
                                    item-text="name"
                                    item-value="id"
                                    :multiple="model.multiple"
                                    outlined
                                    clearable
                                ></component>
                                <v-btn
                                    color="primary"
                                    @click="save"
                                >
                                    Сохранить
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
                <v-card-title class="text-h5">Вы уверены, что хотите удалить?</v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close">Отмена</v-btn>
                    <v-btn color="blue darken-1" text @click="deleteItemConfirm">ДА</v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
export default {
    name: "CRUD",
    props: {
        title: String,
        dialog: Boolean,
        dialogDelete: Boolean,
        id: Number,
        models: Array,
        link: String,
        isEdit: Boolean
    },
    data: () => ({
        errors: []
    }),
    computed: {
        method(){
            return this.isEdit ? 'PATCH' : 'POST'
        },
        action_link(){
            return this.isEdit ? this.link + this.id : this.link
        },
        delete_link(){
            return this.link + this.id
        }
    },
    methods: {
        close() {
            this.errors = []
            this.$emit('close')
        },
        save(){
            let params = {}

            this.models.map(item => {
                if (item.model === 'phone'){
                    item.value = this.getPhone(item.value)
                }
                return params[item.model] = item.value;
            })

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
        deleteItemConfirm(){
            axios
                .delete(this.delete_link)
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
        },
        getPhone(phone) {
            return phone.replace(/[^0-9]/g,'')
        }
    }
}
</script>
