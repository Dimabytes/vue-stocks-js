<template>
  <div class="container">
    Your funds: {{funds | currency}}
  </div>
</template>

<script>
  export default {
    name: "Home",
    computed: {
      funds(){
        return this.$store.getters['portfolio/funds']
      }
    }
  }
</script>

<style scoped>

</style>
