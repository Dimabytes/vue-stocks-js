import {getStocks} from "../../services/stocks";

const state = {
  stocks: []
}

const mutations = {
  "SET_STOCKS" (state, stocks) {
    console.log(stocks)
    state.stocks = stocks
  },
  "RND_STOCKS" (state) {
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (0.5 + Math.random()))
    })
  }
}

const actions = {
  async initStocks({commit}) {
    const stocks = await getStocks();
    commit("SET_STOCKS", stocks)
  },
  randomizeStocks: ({commit}) => {
    commit('RND_STOCKS')
  }
}

const getters = {
  stocks: state => {
    return state.stocks
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
