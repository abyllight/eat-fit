<template>
    <div>
        <v-btn-toggle
            v-if="isDiet"
            v-model="cityId"
            mandatory
            dense
            color="primary"
            class="mb-5"
            @change="changeCity"
        >
            <v-btn
                v-for="c in cities"
                :key="c.id"
                :value="c.id"
            >
                {{c.name}}
            </v-btn>
        </v-btn-toggle>
        <p v-if="rations.length === 0">Пусто</p>
        <v-row v-else>
            <v-col
                v-for="r in rations"
                :key="r.ration"
                cols="12"
                sm="4"
            >
                <v-sheet
                    class="d-flex flex-column align-center justify-center text-center pa-5"
                    style="cursor: pointer"
                    color="blue-grey lighten-5"
                    elevation="2"
                    rounded
                    @click="openDetails(r.ration_id)"
                >
                    <h1 class="display-1 mb-5">{{r.ration}}</h1>
                    <h1 class="display-1 font-weight-bold">{{r.items.length}}</h1>
                </v-sheet>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "SelectRations",
    data: () => ({
        rations: [],
        dialog: false,
        item: {},
        ingredients: [],
        cityId: 1,
        cities: [
            {
                id: 1,
                name: 'Астана'
            },
            {
                id: 2,
                name: 'Алматы'
            }
        ]
    }),
    computed: {
        user() {
            return this.$store.getters['auth/user']
        },
        // only diet works with both cities; everyone else is scoped to their own on the server
        isDiet() {
            return this.user.role_slugs.includes('diet')
        }
    },
    created() {
        this.cityId = Number(this.$route.query.city_id) || this.user.city_id || 1
        this.generateCode()
        this.getList()
    },
    methods: {
        generateCode() {
            axios.get('/api/select/generate-code')
                .then(response => {
                }).catch(error => {
                console.log(error)
            })
        },
        async getList() {
            await axios.get('/api/select/rations', {params: this.isDiet ? {city_id: this.cityId} : {}})
                .then(response => {
                    this.rations = response.data
                }).catch(error => {
                    console.log(error)
                })
        },
        changeCity() {
            this.$router.replace({query: {city_id: this.cityId}}).catch(() => {})
            this.getList()
        },
        openDetails(id) {
            this.$router.push({
                name: 'stickers',
                params: {id: id},
                query: this.isDiet ? {city_id: this.cityId} : {}
            })
        },
    }
}
</script>
