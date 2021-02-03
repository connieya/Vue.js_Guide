import Vue from  'vue' 
import Vuex from 'vuex'

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
    mutations: {
        // input에서 입력한 값을 localStorage에 저장 
         addOneItem (state,todoItem ){
           
          const obj = {completed : false, item : todoItem}
         localStorage.setItem(todoItem, JSON.stringify(obj));
         state.todoItems.push(obj);  

         

        },
        removeOneItem(state,payload){
            localStorage.removeItem(payload.todoItem.item);
         state.todoItems.splice(payload.index,1); // 배열 api , 해당 index 중 1개를 지운다.
        },
        toggleCompleted(state, todoItem, index){
         
            this.todoItems[index].completed = !this.todoItems[index].completed;
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        },
        clearItems(){
        localStorage.clear();
        this.todoItems = [];
    }

    }

});