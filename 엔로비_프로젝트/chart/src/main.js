import Vue from 'vue'
import App from './App.vue'
import {router} from './router/index'
import 'chart.js'
import 'hchs-vue-charts'
import ChartKick from 'chartkick'
import VueChartKick from 'vue-chartkick'

Vue.use(VueChartKick, {ChartKick})

Vue.use(window.VueCharts)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router : router
}).$mount('#app')
