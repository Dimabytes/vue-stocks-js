<template>
  <div class="col-6 mb-4">
    <div class="card">
      <div class="card-header bg-info">
        <p>{{stock.name}}<small> (Price: {{stock.price}} | Quantity: {{stock.quantity}})</small></p>
      </div>
      <div class="card-body row">
        <div class="col-8">
          <input type="number" v-model.number="quantity" class="form-control" placeholder="Quantity">
        </div>
        <div class="col-4">
          <button class="btn btn-success"
                  :disabled="quantity <= 0 || !isAllowSell"
                  @click="sellStock">Sell</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';
  export default {
    name: "StockItem",
    data() {
      return {
        quantity: 0
      }
    },
    computed: {
      isAllowSell() {
        return this.stock.quantity >= this.quantity
      }
    },
    props: {
      "stock": Object,
    },
    methods: {
      ...mapActions('portfolio', {
        sell: 'sellStock',
      }),
      sellStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity,
        }
        this.sell(order)
        this.quantity = 0;
      }
    }
  }
</script>

<style scoped>

</style>
