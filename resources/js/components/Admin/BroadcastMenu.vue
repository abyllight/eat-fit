<template>
    <div>
        broadcast
    </div>
</template>

<script>
export default {
    name: "BroadcastMenu",
    mounted() {
        axios.get('/api/broadcast')
            .then(res => {
                console.log(res)
            })
    }
}
</script>
