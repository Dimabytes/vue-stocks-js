<template>
  <div class="container row">
    <StockItem v-for="(stock, id) in stocks" :key="id" :stock="stock"/>

  </div>
</template>

<script>
  import StockItem from "../stocks/StockItem";
  export default {
    name: "Stocks",
    components: {StockItem},
    computed: {
      stocks(){
        return this.$store.getters['stocks/stocks'] //todo map getters
      }
    }

  }
</script>

<style scoped>

</style>
