<template>
    <div>
      <h2>Здравствуй, {{ this.$store.state.auth.user.name }}!</h2>
    </div>
</template>

<script>
export default {
    name: "Dashboard",
    /*mounted() {
        axios.get('/api/moysklad/create-order')
            .then(res => {
                console.log(res)
            })
    }*/
}
</script>

