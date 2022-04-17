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
                                <template
                                    v-for="model in models"
                                >
                                    <img v-if="isInputFile(model)" :src="'storage/'+model.value" width="128">
                                    <component
                                        :key="model.model"
                                        v-if="model.mask"
                                        v-model="model.value"
                                        v-mask="model.mask"
                                        :is="model.type"
                                        :label="model.label"
                                        :error-messages="errors[model.model]"
                                        :chips="model.chips"
                                        :items="model.items"
                                        :item-text="model.item_name"
                                        item-value="id"
                                        :multiple="model.multiple"
                                        outlined
                                        clearable
                                    ></component>
                                    <component
                                        v-else
                                        :key="model.model"
                                        v-model="model.value"
                                        :is="model.type"
                                        :label="model.label"
                                        :error-messages="errors[model.model]"
                                        :chips="model.chips"
                                        :items="model.items"
                                        :item-text="model.item_name"
                                        item-value="id"
                                        :multiple="model.multiple"
                                        outlined
                                        clearable
                                    ></component>
                                </template>
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
            if (this.multipart) return 'POST'
            return this.isEdit ? 'PATCH' : 'POST'
        },
        multipart_method(){
            return this.isEdit ? 'PATCH' : 'POST'
        },
        action_link(){
            return this.isEdit ? this.link + '/' + this.id : this.link
        },
        delete_link(){
            return this.link + '/' + this.id
        }
    },
    methods: {
        close() {
            this.errors = []
            this.$emit('close')
        },
        isInputFile(model){
            return model.type === 'v-file-input' && model.value
        },
        save(){
            let params = {}
            let dataForm = new FormData()

            this.models.map(item => {
                dataForm.append(item.model, item.value)
                return params[item.model] = item.value;
            })

            dataForm.append('_method', this.multipart_method);

            let data = this.multipart ? dataForm : params

            axios({
                method: this.method,
                url: this.action_link,
                data: data,
                headers: {
                    'content-type': this.multipart ? 'multipart/form-data' : 'application/json'
                }
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
        }
    }
}
</script>
