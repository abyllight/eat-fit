<template>
    <div>
        <v-row>
            <v-col>
                <v-btn
                    color="primary"
                    @click="dialog=true"
                >
                    Добавить ингредиент
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-simple-table dense>
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
                                Actions
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr
                            v-for="(ing, index) in ingredients"
                            :key="ing.id"
                        >
                            <td>{{ index + 1 }}</td>
                            <td>{{ ing.name }}</td>
                            <td>
                                <v-icon
                                    small
                                    class="mr-2"
                                    @click="editIng(ing)"
                                >
                                    mdi-pencil
                                </v-icon>
                                <v-icon
                                    small
                                    @click="deleteIng(ing)"
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
    </div>
</template>

<script>
export default {
    name: "Ingredients",
    data: () => ({
        ingredients: [],
        ingredient: {},
        errors: [],
        edit: -1,
        dialog: false,
        dialogDelete: false,
    }),
    mounted() {
        this.getIngredients()
    },
    methods: {
        async getIngredients(){
            await axios
                .get('/api/ingredients')
                .then(response => {
                    this.ingredients = response.data.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        deleteConfirm(){},
        editIng(){},
        deleteIng(){}
    }
}
</script>
