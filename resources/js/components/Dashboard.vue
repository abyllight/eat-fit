<template>
    <div>
      <h2>Здравствуй, {{ this.$store.state.user.name }}!</h2>
    </div>
</template>

<script>
export default {
    name: "Dashboard"
}
</script>

