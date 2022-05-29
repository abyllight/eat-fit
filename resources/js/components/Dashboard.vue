<template>
    <div>
      <h2>Здравствуй, {{ this.$store.state.auth.user.name }}!</h2>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Dashboard",
    created() {
        //axios.get('/api/webhook').then(response => {console.log(response)})
    }
}
</script>

