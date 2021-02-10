import Vue from 'vue'
import VueRouter from  'vue-router';
import ItemView from '../views/ItemView'
import UserView from '../views/UserView'
import createListView from '../views/CreateListView'
import NewsView  from '../views/NewsView'
import AskView from '../views/AskView'
import JobsView from '../views/JobsView'
import bus from '../utils/bus'
import {store} from '../store/index'


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
        component : NewsView  , // mixin 사용
         beforeEnter: (to, from , next) => {
            // console.log('to' ,to);
            // console.log('from' ,from);
            // console.log('next' ,next);
            // next()
             bus.$emit('start:spinner');
            store.dispatch('FETCH_LIST' , to.name)
            .then( ()=> {
                 bus.$emit('end:spinner');
                 next()
            })
            .catch( (error)=>{
                console.log(error)
            });
        }
       
    },
     {
        path: '/ask',
        name :'ask',
        component: AskView ,
         beforeEnter: (to, from , next) => {
             bus.$emit('start:spinner');
            store.dispatch('FETCH_LIST' , to.name)
            .then( ()=> {
              //   bus.$emit('end:spinner');
                 next()
            })
            .catch( (error)=>{
                console.log(error)
            });
        }
    }, 
     {
        path: '/jobs',
        name : 'jobs',
        component : JobsView,
         beforeEnter: (to, from , next) => {
            console.log('to' ,to);
            console.log('from' ,from);
             bus.$emit('start:spinner');
            store.dispatch('FETCH_LIST' , to.name)
            .then( ()=> {   next()   })
            .catch( (error)=>{
                console.log(error)
            });
        }
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