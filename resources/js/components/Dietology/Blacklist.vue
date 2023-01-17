<template>
    <div>
        <h3 class="mb-5">Черный список</h3>
        <v-row>
            <v-col cols="12" sm="12" lg="4">
                <v-autocomplete
                    v-model="applied_categories"
                    :items="categories"
                    @change="applyCategories"
                    item-text="name"
                    item-value="id"
                    clearable
                    outlined
                    label="Категории"
                    multiple
                ></v-autocomplete>
            </v-col>

            <v-col cols="12" sm="12" lg="8">
                <v-autocomplete
                    v-model="mix"
                    :items="ingredients"
                    item-text="name"
                    item-value="id"
                    clearable
                    outlined
                    small-chips
                    label="Ингредиенты"
                    multiple
                >
                    <template v-slot:selection="data">
                        <v-chip
                            small
                            v-bind="data.attrs"
                            :input-value="data.selected"
                            close
                            @click="data.select"
                            @click:close="removeIngredientFromBlacklist(data.item.id)"
                        >
                            {{ data.item.name }}
                        </v-chip>
                    </template>
                </v-autocomplete>
                <v-btn
                    dark
                    @click="saveBlacklist"
                >
                    Сохранить
                </v-btn>
            </v-col>
        </v-row>

    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Blacklist",
    props: {
        ingredients: Array,
        categories: Array,
        blacklist: Array,
        mix: Array
    },
    data: () => ({
        applied_categories: []
    }),
    methods: {
        applyCategories() {
            let ings = this.applied_categories.map(item => {
                let category = this.categories.find(obj => {
                    return obj.id === item
                })
                return category.ingredient_ids
            })
            ings = ings.flat()
            ings = ings.concat(this.blacklist)
            this.mix = [...new Set(ings)]
        },
        removeIngredientFromBlacklist(id) {
            this.mix = this.mix.filter(function(item) {
                return item !== id
            })
        },
        saveBlacklist(){
            axios
                .post('/api/blacklist', {
                    id: this.order.id,
                    blacklist: this.mix
                })
                .then(response => {
                    this.getSelectDetailsByOrder(this.order.id)

                    this.$store.dispatch('showAlert', {
                        'isVisible': true,
                        'msg': response.data.msg,
                        'color': 'green',
                        'type': 'success'
                    })
                })
                .catch(error => {
                    console.log(error)
                    this.errors = error.response.data.errors
                })
        },
    }
}
</script>
