const state = {
  funds: 10000,
  stocks: []
}

const mutations = {
  "BUY_STOCK"(state, {stockId, quantity, stockPrice}) {
    const record = state.stocks.find(el => el.id === stockId);
    if(record) {
      record.quantity += quantity
    } else {
      state.stocks.push({
        id: stockId,
        quantity: quantity,
      })
    }

    state.funds -= stockPrice * quantity

  },
  "SELL_STOCK"(state, {stockId, quantity, stockPrice}) {
    const record = state.stocks.find(el => el.id === stockId);
    if(record.quantity > quantity){
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1)
    }
    state.funds += stockPrice * quantity
  },

  "SET_PORTFOLIO"(state, portfolio){
    state.funds = portfolio.funds
    state.stocks = portfolio.stocksPortfolio ? portfolio.stocksPortfolio : []
  }

}

const actions = {
  sellStock({commit}, order){
    commit("SELL_STOCK", order)
  },
  buyStock({commit}, order) {
    commit('BUY_STOCK', order)
  },
}

const getters = {
  stocks (state, _, rootGetters) {
    return state.stocks.map(stock => {
      const record = rootGetters['stocks']['stocks'].find(el => el.id === stock.id);
      return {...record, quantity: stock.quantity}
    })
  },
  funds: state => state.funds
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
