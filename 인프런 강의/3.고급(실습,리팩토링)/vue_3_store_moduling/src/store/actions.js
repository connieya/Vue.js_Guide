import {
    fetchAskList, 
    fetchJobsList, 
    fetchNewsList, 
    fetchUserList} 
    from '../api/index';

export default {
        FETCH_NEWS(context){
            fetchNewsList()
            .then(response =>{
                console.log(response.data);
                context.commit('SET_NEWS' , response.data);
               // state.news = response.data;
            })
            .catch(error =>{
                console.log(error);
            });
        },
        FETCH_ASK(context){
            console.log("context 속성 알아보기", context)
            // commit , dispatch, getters, 
            //rootGetters, rootState, state
            fetchAskList()
            .then(response =>{
                context.commit('SET_ASK',response.data)
                
            })
            .catch(error =>{
                console.log(error);
            })

        },
        //  JOBS에는 디스럭처링? 적용하기
        FETCH_JOBS({commit}){
            fetchJobsList()
            .then(({data}) =>{
                commit('SET_JOBS',data)
            })
            .catch(error => {
                console.log(error)
            })
        },
        FETCH_USER({commit} , name){
            fetchUserList(name)
            .then(({data}) =>{
                commit('SET_USER',data)
            })
        }
        
    }