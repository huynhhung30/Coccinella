import Vue from 'vue';
import App from './layouts/App.vue';
import router from './router';
import store from './store';
import { BootstrapVue, IconsPlugin, SpinnerPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import ZoomOnHover from 'vue-zoom-on-hover';

Vue.config.productionTip = false;
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
Vue.use(SpinnerPlugin);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(ZoomOnHover);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
