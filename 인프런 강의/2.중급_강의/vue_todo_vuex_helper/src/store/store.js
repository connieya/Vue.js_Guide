import Vue from  'vue' 
import Vuex from 'vuex'
import * as  getters from './getter'
import * as  mutations from './mutations'
Vue.use(Vuex);

const storage = {
    
    fetch(){
        const arr = [];
        if(localStorage.length>0){
            for(let i=0; i<localStorage.length; i++){
                if(localStorage.key(i) !=='loglevel:webpack-dev-server' )
                // this.todoItems.push(localStorage.key(i));
           arr.push( JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
        }
        return arr;
  },
    };
    

export const store = new Vuex.Store({

    state : {
       headerText: 'TODO it !',
       todoItems : storage.fetch()

    },
    getters : getters, //{


        // storedTodoItems(state){
        //     return state.todoItems;
        // }   store/getter.js 에 모듈화 시킴
     //},
    mutations: mutations //{
            //store/mutation.js에 모듈화 시킴

    //      addOneItem (state,todoItem ){
           
    //       const obj = {completed : false, item : todoItem}
    //      localStorage.setItem(todoItem, JSON.stringify(obj));
    //      state.todoItems.push(obj);  

         

    //     },
    //     removeOneItem(state,payload){
    //         localStorage.removeItem(payload.todoItem.item);
    //      state.todoItems.splice(payload.index,1); 
    //     },
    //     toggleCompleted(state, payload){
         
    //         state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    //         localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    //     },
    //     clearItems(state){
    //     localStorage.clear();
    //     state.todoItems = [];
    // }

 //   }

});