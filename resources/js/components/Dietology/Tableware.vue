<template>
    <div>
        <v-row>
            <v-col>
                <v-btn
                    color="primary"
                    @click="dialog=true"
                >
                    Добавить посуду
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                        <tr>
                            <th class="text-left">
                                #
                            </th>
                            <th class="text-left">
                                Image
                            </th>
                            <th class="text-left">
                                Название
                            </th>
                            <th class="text-left">
                                Размер
                            </th>
                            <th class="text-left">
                                Действие
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr
                            v-for="(item, index) in items"
                            :key="item.id"
                        >
                            <td>
                                <strong>{{ index + 1 }}</strong>
                            </td>
                            <td><img :src="'/storage/'+item.img" width="100"/></td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.size }}</td>
                            <td>
                                <v-icon
                                    small
                                    class="mr-2"
                                    @click="editItem(item)"
                                >
                                    mdi-pencil
                                </v-icon>
                                <v-icon
                                    small
                                    @click="deleteItem(item)"
                                >
                                    mdi-delete
                                </v-icon></td>
                        </tr>
                        </tbody>
                    </template>
                </v-simple-table>
                <v-dialog v-model="dialogDelete" max-width="500px">
                    <v-card>
                        <v-card-title class="text-h5">Вы уверены?</v-card-title>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="dialogDelete=false">Отмена</v-btn>
                            <v-btn color="blue darken-1" text @click="deleteConfirm">Да</v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-dialog
                v-model="dialog"
                fullscreen
                hide-overlay
                transition="dialog-bottom-transition"
            >
                <v-card>
                    <v-toolbar
                        dark
                        color="primary"
                    >
                        <v-btn
                            icon
                            dark
                            @click="close"
                        >
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-toolbar-title>Посуда</v-toolbar-title>
                    </v-toolbar>
                    <v-card-title>
                        <span class="text-h5"> {{ edit === 1 ? 'Редактировать' : 'Добавить' }}</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container fluid>
                            <v-row>
                                <v-col
                                    sm="12"
                                    lg="4"
                                >
                                    <v-text-field
                                        v-model="item.name"
                                        label="Название"
                                        :error-messages="errors.name"
                                        outlined
                                        dense
                                        clearable
                                    ></v-text-field>
                                    <v-text-field
                                        v-model="item.size"
                                        label="Размер"
                                        :error-messages="errors.size"
                                        outlined
                                        dense
                                        clearable
                                    ></v-text-field>
                                    <v-file-input
                                        v-model="item.img"
                                        label="Изображение"
                                        outlined
                                        dense
                                    ></v-file-input>
                                    <v-btn
                                        color="primary"
                                        @click="action"
                                    >
                                        Сохранить
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "Tableware",
    data: () => ({
        items: [],
        item: {
            id: null,
            name: null,
            size: null,
            img: null
        },
        errors: [],
        edit: -1,
        dialog: false,
        dialogDelete: false
    }),
    mounted() {
        this.getTablewares()
    },
    methods: {
        async getTablewares(){
            await axios
                .get('/api/tableware')
                .then(response => {
                    this.items = response.data.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        action(){
            if (this.edit === 1){
                this.update()
            }else{
                this.store()
            }
        },
        store() {
            let dataForm = new FormData()
            dataForm.append('name', this.item.name)
            dataForm.append('size', this.item.size)
            dataForm.append('img', this.item.img)
            dataForm.append('_method', 'POST');

            axios({
                method: 'POST',
                url: '/api/tableware',
                data: dataForm,
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
                .then(response => {
                    if(response.data.status){
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.msg,
                            'color': 'green',
                            'type': 'success'
                        })
                        this.close()
                        this.getTablewares()
                    }else{
                        this.errors = response.data.errors
                    }
                })
                .catch(error => {
                    console.log(error)
                    this.errors = error.response.data.errors
                })
        },
        update(){
            let dataForm = new FormData()
            dataForm.append('name', this.item.name)
            dataForm.append('size', this.item.size)
            dataForm.append('img', this.item.img)
            dataForm.append('_method', 'POST');

            axios({
                method: 'POST',
                url: '/api/tableware/'+this.item.id,
                data: dataForm,
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
                .then(response => {
                    if(response.data.status){
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.msg,
                            'color': 'green',
                            'type': 'success'
                        })
                        this.close()
                        this.getTablewares()
                    }else{
                        this.errors = response.data.errors
                    }
                })
                .catch(error => {
                    this.errors = error.response.data.errors
                })
        },
        close(){
            this.dialog = false
            this.dialogDelete = false
            this.edit = -1
            this.item = {
                name: '',
                size: '',
                img: null
            }
        },
        editItem(item){
            this.edit = 1
            this.item = item
            this.dialog = true
        },
        deleteItem(item){
            this.item = item
            this.dialogDelete = true
        },
        deleteConfirm(){
            axios
                .delete('/api/tableware/'+this.item.id)
                .then(response => {
                    if(response.data.status){
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.msg,
                            'color': 'green',
                            'type': 'success'
                        })
                        this.close()
                        this.getTablewares()
                    }else{
                        this.errors = response.data.errors
                    }
                })
                .catch(error => {
                    console.log(error)
                    this.errors = error.response.data.errors
                })
        }
    }
}
</script>
