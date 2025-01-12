import Vue from 'vue';
import VueRouter from 'vue-router';
import CoccinellaItem from '../views/Coccinella/CoccinellaItem.vue';
import CoccinellaHome from '../views/Coccinella/CoccinellaHome.vue';
import ProductDetails from '../views/ProductDetails.vue';
import Cart from '../views/Cart.vue';
import Checkout from '../views/Checkout.vue';
import Search from '../views/Search.vue';

Vue.use(VueRouter);

const routes = [
  // =-=-=-=-coccinella shop=-=-=-=-=-
  {
    path: '/',
    name: 'Home',
    component: CoccinellaHome,
  },
  {
    path: '/shoes',
    name: 'item',
    component: CoccinellaItem,
  },
  {
    path: '/product/:id',
    name: 'productDetails',
    component: ProductDetails,
  },
  {
    path: '/search/:searchTerm',
    name: 'Search',
    component: Search,
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
