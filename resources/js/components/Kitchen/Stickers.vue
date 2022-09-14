<template>
    <div>
        <v-row>
            <v-col
                v-for="s in stickers"
                :key="s.ration"
                cols="12"
                sm="4"
            >
                <v-sheet
                    class="d-flex flex-column align-center justify-center text-center pa-5"
                    style="cursor: pointer"
                    color="blue-grey lighten-5"
                    rounded
                    @click="openDetails(s)"
                >
                    <h1 class="display-2 mb-3">{{s.code}}</h1>
                    <p>{{s.name}}</p>
                    <h1 class="display-1">{{s.count}}шт</h1>
                </v-sheet>
            </v-col>
        </v-row>
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
import axios from "axios";

export default {
    name: "Stickers",
    props: ['id'],
    data: () => ({
        stickers: [],
        dialog: false,
        item: {},
        ingredients: []
    }),
    created() {
       this.getStickersByRationId()
    },
    methods: {
        getStickersByRationId(){
            axios.get('/api/select/stickers/'+this.id)
                .then(res => {
                    console.log(res)
                    this.stickers = res.data
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
    }
}
</script>
