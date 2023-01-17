<template>
    <div>
        <v-row>
            <v-col>
                <v-btn
                    color="primary"
                    @click="dialog=true"
                >
                    Добавить рацион
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
                                Название
                            </th>
                            <th class="text-left">
                                Code
                            </th>
                            <th class="text-left">
                                Iiko №
                            </th>
                            <th class="text-left">
                                Цех
                            </th>
                            <th class="text-left">
                                Посуда
                            </th>
                            <th class="text-left">
                                Действие
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr
                            v-for="(item, index) in rations"
                            :key="item.id"
                        >
                            <td>
                                <strong>{{ index + 1 }}</strong>
                            </td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.code }}</td>
                            <td>{{ item.iiko_id }}</td>
                            <td>{{ item.department }}</td>
                            <td>
                                <img :src="item.tableware_img" width="100"/>
                            </td>
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
                        <v-toolbar-title>Рацион</v-toolbar-title>
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
                                        v-model="ration.name"
                                        label="Название"
                                        :error-messages="errors.name"
                                        outlined
                                        dense
                                        clearable
                                    ></v-text-field>
                                    <v-text-field
                                        v-model="ration.code"
                                        label="Code"
                                        :error-messages="errors.code"
                                        outlined
                                        dense
                                        clearable
                                    ></v-text-field>
                                    <v-text-field
                                        v-model="ration.iiko_id"
                                        label="Iiko #"
                                        :error-messages="errors.iiko_id"
                                        outlined
                                        type="number"
                                        dense
                                        clearable
                                    ></v-text-field>
                                    <v-select
                                        v-model="ration.department_id"
                                        :items="departments"
                                        item-text="name"
                                        item-value="id"
                                        label="Цех"
                                        :error-messages="errors.department_id"
                                        outlined
                                        dense
                                        clearable
                                    ></v-select>
                                    <v-select
                                        v-model="ration.tableware_id"
                                        :items="tablewares"
                                        item-text="name"
                                        item-value="id"
                                        label="Посуда"
                                        :error-messages="errors.tableware_id"
                                        outlined
                                        dense
                                        clearable
                                    ></v-select>
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
    name: "Rations",
    data: () => ({
        rations: [],
        ration: {
            name: '',
            code: '',
            iiko_id: null,
            is_required: false,
            department_id: null,
            tableware_id: null
        },
        errors: [],
        edit: -1,
        dialog: false,
        dialogDelete: false,
        departments: [],
        tablewares: []
    }),
    mounted() {
        this.getRations()
        this.getDepartments()
        this.getTablewares()
    },
    methods: {
        async getRations(){
            await axios
                .get('/api/rations')
                .then(response => {
                    this.rations = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        async getDepartments(){
            await axios
                .get('/api/departments')
                .then(response => {
                    this.departments = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        async getTablewares(){
            await axios
                .get('/api/tableware')
                .then(response => {
                    this.tablewares = response.data.data
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
        store(){
            axios
                .post('/api/rations', this.ration)
                .then(response => {
                    if(response.data.status){
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.msg,
                            'color': 'green',
                            'type': 'success'
                        })
                        this.close()
                        this.getRations()
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
            axios
                .patch('/api/rations/'+this.ration.id, this.ration)
                .then(response => {
                    if(response.data.status){
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.msg,
                            'color': 'green',
                            'type': 'success'
                        })
                        this.close()
                        this.getRations()
                    }else{
                        this.errors = response.data.errors
                    }
                })
                .catch(error => {
                    console.log(error)
                    this.errors = error.response.data.errors
                })
        },
        close(){
            this.dialog = false
            this.dialogDelete = false
            this.edit = -1
            this.ration = {
                name: '',
                code: '',
                iiko_id: null,
                is_required: false,
                department_id: null
            }
        },
        editItem(ration){
            this.edit = 1
            this.ration = ration
            this.dialog = true
        },
        deleteItem(ration){
            this.ration = ration
            this.dialogDelete = true
        },
        deleteConfirm(){
            axios
                .delete('/api/rations/'+this.ration.id)
                .then(response => {
                    if(response.data.status){
                        this.$store.dispatch('showAlert', {
                            'isVisible': true,
                            'msg': response.data.msg,
                            'color': 'green',
                            'type': 'success'
                        })
                        this.close()
                        this.getRations()
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
