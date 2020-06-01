<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <router-link class="navbar-brand" to="/">Stocks trader</router-link>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
          <router-link to="/portfolio" class="nav-item" tag="li" active-class="active">
            <a class="nav-link">Portfolio</a>
          </router-link>
        <router-link to="/stocks" class="nav-item" tag="li" active-class="active">
          <a class="nav-link">Stocks</a>
        </router-link>
      </ul>
      <a @click="endDay" style="cursor: pointer" class="navbar-nav ml-auto">End day</a>

      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"  @click="isDropdownOpen = !isDropdownOpen"  href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Save & Load
          </a>
          <div class="dropdown-menu" :class="{show: isDropdownOpen}" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#" @click="saveData">Save data</a>
            <a class="dropdown-item" href="#" @click="loadData">Load data</a>
          </div>
        </li>
      </ul>
      <strong class="navbar-nav">Funds: {{funds | currency}}</strong>

    </div>
  </nav>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  export default {
    name: "Header",
    data(){
      return {
        isDropdownOpen: false

      }
    },
    computed: {
      ...mapGetters('portfolio', {
        'funds': 'funds',
        'stocksPortfolio': 'stocks'
      }),
      ...mapGetters('stocks', [
        'stocks'
      ]),
    },
    methods: {
      ...mapActions('stocks', {
        'randomizeStocks': 'randomizeStocks',

      }),
      ...mapActions({
        'fetchData': 'loadData',
      }),
      endDay(){
        this.randomizeStocks();
      },
      saveData(){
        const data = {
          funds: this.funds,
          stocks: this.stocks,
          stocksPortfolio: this.stocksPortfolio
        }
        this.$http.put('data.json', data)
      },
      loadData() {
        this.fetchData()
      }
    }
  }
</script>

<style scoped>

</style>
