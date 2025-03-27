<template>
    <div>
      <h2>Здравствуй, {{ this.$store.state.auth.user.name }}!</h2>
<!--        <v-btn @click="doSmth">test</v-btn>-->
    </div>
</template>

<script>
export default {
    name: "Dashboard",
    methods: {
        /*doSmth() {
            axios.post('/api/management/otkat')
                .then(res => {
                    console.log(res)
                })
        }*/
    }
    /*mounted() {
        axios.get('/api/moysklad/create-demand')
            .then(res => {
                console.log(res)
            })
    }*/
}
</script>

