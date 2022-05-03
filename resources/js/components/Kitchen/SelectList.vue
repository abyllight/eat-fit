<template>
    <div>
        <div
            v-for="ration in rations"
            :key="ration.ration"
            class="mb-10"
        >
            <h2 class="mb-5">{{ration.ration}}</h2>
            <v-row>
                <v-col
                    v-for="item in ration.items"
                    :key="item.code"
                    cols="12"
                    sm="3"
                >
                    <v-sheet
                        class="d-flex flex-column align-center justify-center text-center pa-5"
                        style="cursor: pointer"
                        color="blue-grey lighten-5"
                        rounded
                        @click="openDetails(item)"
                    >
                        <h1 class="display-3 mb-3">{{item.code}}</h1>
                        <h4 class="font-weight-light mb-3">{{item.name}}</h4>
                        <h1 class="display-1">{{item.count}}шт</h1>
                    </v-sheet>
                </v-col>
            </v-row>
            <v-divider class="mt-10"></v-divider>
        </div>

        <v-row justify="center">
            <v-dialog
                v-model="dialog"
                width="1000px"
            >
                <v-card>
                    <v-card-title>
                        <span class="text-h5 mb-4">{{ item.name }}</span>
                    </v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col>
                                <v-sheet
                                    v-for="(i, index) in ingredients"
                                    :key="i.id"
                                    class="pa-3 mb-2"
                                    color="teal lighten-5"
                                >
                                    <h3>{{index+1}}. {{i.name}}</h3>
                                </v-sheet>
                            </v-col>
                            <v-col>
                                <h1 class="font-weight-light">
                                    {{item.description}}
                                </h1>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            text
                            @click="dialog = false"
                        >
                            Закрыть
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "SelectList",
    data: () => ({
        rations: [],
        dialog: false,
        item: {},
        ingredients: []
    }),
    created() {
        this.getList()
    },
    methods: {
        async getList() {
            await axios.get('/api/select/list')
                .then(response => {
                    this.rations = response.data
                }).catch(error => {
                    console.log(error)
                })
        },
        openDetails(item) {
            this.item = item
            axios.get('/api/select/'+item.id)
                .then(response => {
                    this.ingredients = response.data
                })
                .catch(error => {
                    console.log(error)
                })
            this.dialog = true
        },
        count(item) {

        }
    }
}
</script>
