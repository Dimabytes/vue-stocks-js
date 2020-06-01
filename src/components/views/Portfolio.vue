<template>
  <div class="container row">
    <StockItem v-for="(stock, id) in stocks" :key="id" :stock="stock"/>
  </div>
</template>

<script>
  import StockItem from "../portfolio/StockItem";
  export default {
    name: "Portfolio",
    components: {
      StockItem
    },
    computed: {
      stocks() {
        return this.$store.getters['portfolio/stocks'] //todo map getters
      }
    }
  }
</script>

<style scoped>

</style>
