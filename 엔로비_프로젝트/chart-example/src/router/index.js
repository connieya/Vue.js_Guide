import Vue from 'vue'
import Router from 'vue-router'
import Main from '../view/Main.vue'
import BarChart from '../view/BarChart-view'


Vue.use(Router)

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/main',
            name : 'Main',
            component: Main
        },
        {
            path :'/bar',
            name : 'BarChart',
            component : BarChart
        }
    ]
})