import Vue from 'vue'
import Router from 'vue-router'
import ChartLine from '../views/Chart_line'
import MapApifrom from '@/components/MapApi'


Vue.use(Router)

export const router = new Router({
    mode: 'history',
    routes : [
        {
            path: '/',
            // component : Home
            component :()=> import('@/views/Home')
        },
        {
            path: '/lineChart',
            name : 'VueChartKick',
            component : ChartLine
        },
         {
            path: '/map',
            name : 'mapAPI',
            component : MapApifrom
        }

    ]

})