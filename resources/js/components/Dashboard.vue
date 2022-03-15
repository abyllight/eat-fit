<template>
    <div>
      <h2>Здравствуй, {{ this.$store.state.auth.user.name }}!</h2>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Dashboard",
    mounted() {
        axios.post('/api/customer', {
            id: 1
        })
            .then(response => {
                console.log(response)
            })
    }
}
</script>

