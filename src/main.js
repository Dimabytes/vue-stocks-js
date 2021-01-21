import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from "vue-router";
import router from "./routes";
import store from "./store/store";

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.filter('currency', value => {
  return "$" + value.toLocaleString();
})

Vue.http.options.root = 'https://teststocks-7dd7a.firebaseio.com/'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
