<template>
    <div>
        <div>
            <div>
                <draggable id="0" group="cards" @end="log" style="display: flex; overflow-x: auto; padding: 4px; border: 1px dashed darkgrey; height: 200px">
                    <v-card v-for="card in cards" :id="card.code" :key="card.code" width="300" class="pa-4 mr-5" style="flex-shrink: 0" @click="openModal(card)">
                        <h2>{{card.code}}</h2>
                        <p class="text-body-2">{{card.dish_name}}</p>
                        <span class="text-h6">Количество: <strong>{{card.items.length}}</strong></span>
                    </v-card>
                </draggable>
            </div>

            <div v-for="group in groups" :key="group.name" class="my-10">
                <div class="d-flex justify-space-between align-center mb-5">
                    <h3>{{group.name}}</h3>
                    <v-btn x-small color="red" dark @click="deleteGroup(group.id)">
                        удалить
                    </v-btn>
                </div>

                <draggable :id="group.id" group="cards" @end="log" style="display: flex; overflow-x: auto; padding: 4px; border: 1px dashed darkgrey; height: 200px">
                    <v-card v-for="card in group.cards" :id="card.code" :key="card.code" width="300" class="pa-4 mr-5" style="flex-shrink: 0" @click="openModal(card)">
                        <h2>{{card.code}}</h2>
                        <p class="text-body-2">{{card.dish_name}}</p>
                        <span class="text-h6">Количество: <strong>{{card.items.length}}</strong></span>
                    </v-card>
                </draggable>
            </div>
        </div>

        <v-btn
            color="pink"
            dark
            fixed
            bottom
            right
            fab
            @click="dialog = true"
        >
            <v-icon>mdi-plus</v-icon>
        </v-btn>

        <v-dialog
            v-model="dialog"
            width="500"
        >
            <v-card>
                <v-card-text>
                    <v-row>
                        <v-col>
                            <v-text-field
                                v-model="group_name"
                                label="Название"
                                outlined
                                clearable
                                class="mt-5"
                            >
                            </v-text-field>
                            <v-btn @click="createGroup">
                                Создать
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-dialog>

        <v-row justify="space-around">
            <v-col cols="auto">
                <v-dialog
                    v-model="modal"
                    max-width="720"
                >
                    <v-card>
                        <v-card-title>{{order.dish_name}}</v-card-title>
                        <v-card-text>
                            <v-row>
                                <v-col>
                                    <v-sheet
                                        v-for="(i, index) in order.ingredients"
                                        :key="i.name"
                                        class="mb-2"
                                    >
                                        <strong>{{index+1}}.</strong>
                                        {{i.name}}
                                    </v-sheet>
                                </v-col>

                                <v-col>
                                    <div v-if="order.description" class="mb-3 rounded pa-2" style="border:1px solid grey">
                                        <h4>Описание:</h4>
                                        {{order.description}}
                                    </div>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-dialog>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
    name: "CardNGroup",
    components: {
        draggable
    },
    data: () => ({
        cards: [],
        groups: [],
        dialog: false,
        modal: false,
        group_name: null,
        order: {}
    }),
    mounted() {
        this.getItems()
    },
    methods: {
        async getItems() {
            await axios.get('/api/cards')
                .then(res => {
                    this.cards = res.data.cards
                    this.groups = res.data.groups
                })
        },
        createGroup() {
            axios.post('/api/cards', {
                name: this.group_name
            }).then(res => {
                this.groups = res.data
                this.group_name = null
                this.dialog = false
            })
        },
        deleteGroup(id) {
            axios.post('/api/cards/'+ id).then(res => {
                this.groups = res.data
            })
        },
        log(evt){
            let code = evt.item.id
            let group_id = evt.to.id

            axios.post('/api/cards-sort', {
                code: code,
                g_id: group_id
            }).then(res => {
                this.getItems()
            })
        },
        checkPrepared(items) {
            let count = 0

            items.map(x => {
                if (x.is_prepared) {
                    count++
                }
            })

            return count
        },
        openModal(item) {
            this.order = item
            this.modal = true
        }
    }
}
</script>
