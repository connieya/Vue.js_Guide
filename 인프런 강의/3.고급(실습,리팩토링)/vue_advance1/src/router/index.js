import Vue from 'vue'
import VueRouter from  'vue-router';
import NewsView  from '../views/NewsView'
import AskView from '../views/AskView'
import JobsView from '../views/JobsView'
import ItemView from '../views/ItemView'
import UserView from '../views/UserView'


Vue.use(VueRouter)
export const router = new VueRouter({
    mode:'history',
  routes:[
    {
        path: '/',
        redirect: '/news'

    },

    {
        // path : url 주소
        path: '/news',
        component: NewsView,
        // components : url 주소로 ㄱ갔을 때 표시됨
    },
     {
        // path : url 주소
        path: '/ask',
        component: AskView,
        // components : url 주소로 ㄱ갔을 때 표시됨
    },
     {
        // path : url 주소
        path: '/jobs',
        component: JobsView,
        // components : url 주소로 ㄱ갔을 때 표시됨
    },{
        path: '/item',
        component : ItemView
    },
    {
        path: '/user',
        component : UserView
    }
]
})