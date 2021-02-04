import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import ChartLine from '../views/Chart_line'


Vue.use(Router)

export const router = new Router({
    mode: 'history',
    routes : [
        {
            path: '/',
            component : Home
        },
        {
            path: '/lineChart',
            name : 'VueChartKick',
            component : ChartLine
        }
    ]

})