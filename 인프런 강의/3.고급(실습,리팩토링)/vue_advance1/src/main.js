import Vue from 'vue'
import App from './App.vue'
import {router} from './router/index';
import {store} from './store/index';


Vue.config.productionTip = false




new Vue({
  render: h => h(App),
  router : router,
  store
  //  축약형
}).$mount('#app')
