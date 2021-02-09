
import Chart from 'chart.js'

export default{
    install(Vue){
        Vue.prototype.$_Chart = Chart ;

        // BarChart.vue
        // this.$_Chart
        // LineChart.Vue
        // this.$_Chart
    }
}