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
        return
        axios.post('/api/cart-item/add', {
            customer_id: 1,
            product_id: 4
        })
            .then(response => {
                console.log(response)
            })
    }
}
</script>

