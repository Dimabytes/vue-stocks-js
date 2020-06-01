import Vue from 'vue'

export const getStocks =  async () => {
  const res = await Vue.http.get('stocks.json');
  return await res.json()
}
