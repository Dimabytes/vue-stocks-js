<template>
  <div class="col-6 mb-4">
    <div class="card">
      <div class="card-header bg-success">
       <p>{{stock.name}}<small> (Price: {{stock.price}})</small></p>
      </div>
      <div class="card-body row">
        <div class="col-8">
          <input type="number" v-model.number="quantity" class="form-control" placeholder="Quantity">
        </div>
        <div class="col-4">
          <button class="btn btn-success"
                  :disabled="quantity <= 0 || !isAllowBuy"
                  @click="buyStock">Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  export default {
    name: "StockItem",
    data() {
      return {
        quantity: 0
      }
    },
    computed: {
      ...mapGetters('portfolio', [
        'funds'
      ]),

      isAllowBuy() {
        return this.quantity * this.stock.price <= this.funds
      }
    },
    props: {
      "stock": Object,
    },
    methods: {
      ...mapActions('portfolio', {
        buy: 'buyStock',
      }),
      buyStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity,
        }
        this.buy(order)
        this.quantity = 0;
      }
    }
  }
</script>

<style scoped>

</style>
