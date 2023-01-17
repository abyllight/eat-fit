<template>
    <div>
        <v-row>
            <v-col>
                {{select}}
            </v-col>
        </v-row>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Marat",
    data: () => ({
        select: []
    }),
    mounted() {
        this.getStat()
    },
    methods: {
        getStat() {
            axios.get('/api/marat/stat')
                .then(response => {
                    this.select = response.data.select
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>
