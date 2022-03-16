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
        //this.increment()
    },
    methods: {
        async me(){
            let device = localStorage.getItem('v_device')

            if (device === null || device === undefined) {
                device = '123'
                window.localStorage.setItem('v_device', device);
            }

            await axios.get('/api/customer/'+device)
                .then(response => {
                    console.log(response)
                })
        },
        add() {
            axios.post('/api/cart-item/add', {
                customer_id: 1,
                product_id: 3
            })
                .then(response => {
                    console.log(response)
                })
        },
        getCartById() {
             axios.get('/api/cart/df444f88-a4fd-11ec-8c7e-1e009a1ab465')
                .then(response => {
                    console.log(response)
                })
        },
        increment() {
            axios.post('/api/cart-item/increment/', {
                id: '255cc886-a500-11ec-a507-1e009a1ab465'
            })
                .then(response => {
                    console.log(response)
                })
        }
    }
}
</script>

