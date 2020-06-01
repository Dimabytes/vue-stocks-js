<template>

  <div class="container">
    <Header/>
    <transition name="slide" mode="out-in">
    <router-view/>
    </transition>
  </div>
</template>

<script>
    import "bootstrap/dist/css/bootstrap.min.css"
    import Header from "./components/Header";
    export default {
      components: {Header},
      created() {
        this.$store.dispatch("stocks/initStocks")
      }
    }
</script>

<style>

html{
  font-size: 14px;
}
</style>
