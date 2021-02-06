import Vue from 'vue'
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state :{
        news: [],
        ask : [],
        jobs : [],
        user : {}

    },
    getters:{
        fetchedAsk(state){
            return state.ask;

    }
    },
    mutations: mutations  // 비교를 위해 일부러 축약 하지 않음
    ,
    actions
    //actions: actions  이름이 같으니 축약 간으
    ,

});