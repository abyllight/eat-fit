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
                                <img v-if="hasImage" :src="image" width="320">
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
                                    :item-text="model.item_name"
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
        isEdit: Boolean,
        multipart: Boolean
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
        },
        hasImage(){
            let image = this.models.find(item => {
                return item.model === 'image'
            })

            if (!image) return false

            return image.value !== null
        },
        image(){
            return ''
            /*let image = this.models.find(item => {
                return item.model === 'image'
            })

            return image.value !== null ? 'storage/'+image.value : ''*/
        }
    },
    methods: {
        close() {
            this.errors = []
            this.$emit('close')
        },
        save(){
            let params = {}
            let dataForm = new FormData()

            this.models.map(item => {
                if (item.model === 'phone'){
                    item.value = this.getPhone(item.value)
                }
                dataForm.append(item.model, item.value)
                return params[item.model] = item.value;
            })

            axios({
                method: this.method,
                url: this.action_link,
                data: this.multipart ? dataForm : params,
                headers: { "Content-Type": this.multipart ? "multipart/form-data" : 'application/json' }
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
