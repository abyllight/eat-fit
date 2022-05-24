<template>

</template>

<script>
export default {
    name: "PlusOne",
    created() {
        axios.get('/api/plus-one/1')
            .then(response => {
                console.log(response)
            })
    }
}
</script>
