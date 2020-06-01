import Vue from 'vue'

export const loadData = ({commit}) => {
  Vue.http.get('data.json')
    .then(res => res.json())
    .then(data => {
      if(data){
        const {stocks, funds, stocksPortfolio} = data;
        commit("portfolio/SET_PORTFOLIO",{stocksPortfolio, funds}, {root: true})
        commit("stocks/SET_STOCKS", stocks, {root: true})
      }
    })
}
