import Vue from 'vue'
import App from './App.vue'
import {router} from './router/index'

import ChartKick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.use(ChartKick.use(Chart))

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router : router

}).$mount('#app')
