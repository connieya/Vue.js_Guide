import Vue from 'vue'
import Router from 'vue-router'
import BarProps from '../views/BarProps'
import VueChartJS from '../views/VueChartJS'
import VueChartKick from '../views/VueChartKick'
import VueCharts from '../views/VueCharts'
import BarChartJS from '../views/Bar-VueChartJS'
import RandomChart from '../views/RandomChart'

Vue.use(Router)

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name : 'BarProps',
            component : BarProps

        },

        {
            path: '/chartjs',
            name : 'VueChartJS',
            component : VueChartJS
        },

        {
            path: '/chartkick',
            name: 'VueChartKick',
            component: VueChartKick
        },

        {
            path: '/charts',
            name: 'VueCharts',
            component: VueCharts
        },
        {
            path: '/barJS',
            component : BarChartJS
        },
        {
            path: '/random',
            component : RandomChart
        }
    ]
})

