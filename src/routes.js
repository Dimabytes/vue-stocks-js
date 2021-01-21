import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./components/views/Home'),
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('./components/views/Portfolio'),
  },
  {
    path: '/stocks',
    name: 'Stocks',
    component: () => import('./components/views/Stocks'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
