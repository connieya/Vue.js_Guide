import Vue from 'vue'
import VueRouter from  'vue-router';
import ItemView from '../views/ItemView'
import UserView from '../views/UserView'
import createListView from '../views/CreateListView'
import NewsView  from '../views/NewsView'
import AskView from '../views/AskView'
import JobsView from '../views/JobsView'
import bus from '../utils/bus'



Vue.use(VueRouter)
export const router = new VueRouter({
    mode:'history',
  routes:[
    {
        path: '/',
        redirect: '/news'

    },

    {
        path: '/news',
        name : 'news',
        //component: createListView('NewsView'),
        component : NewsView  , // mixin 사용
       
    },
     {
        path: '/ask',
        name :'ask',
        // component: createListView('AskView'),
        component: AskView // mixin 사용
    }, 
     {
        path: '/jobs',
        name : 'jobs',
        //component: createListView('JobsView'),   // HOC 사용
        component : JobsView
    },{
        path: '/item',
        component : ItemView
    },
    {
        path: '/user/:id',
        component : UserView
    },
    
]
})