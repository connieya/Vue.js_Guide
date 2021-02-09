import {
    fetchAskList, 
    fetchItem, 
    fetchJobsList, 
    fetchList, 
    fetchNewsList, 
    fetchUserList} 
    from '../api/index';

export default {
        // FETCH_NEWS(context){
        //     fetchNewsList()
        //     .then(response =>{
        //         context.commit('SET_NEWS' , response.data);
        //         return response;
        //     })
        //     .catch(error =>{
        //         console.log(error);
        //     });
        // },
        // FETCH_ASK(context){
        //     console.log("context 속성 알아보기", context)
        //     fetchAskList()
        //     .then(response =>{
        //         context.commit('SET_ASK',response.data)
                
        //     })
        //     .catch(error =>{
        //         console.log(error);
        //     })

        // },
        // FETCH_JOBS({commit}){
        //     fetchJobsList()
        //     .then(({data}) =>{
        //         commit('SET_JOBS',data)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
        // },
        FETCH_USER({commit} , name){
            fetchUserList(name)
            .then(({data}) =>{
                commit('SET_USER',data)
            })
        },
        FETCH_ITEM({commit} ,itemId){
            fetchItem(itemId)
            .then(response =>{
                console.log('response 확인',response)
                commit('SET_ITEM' , response.data)
            })
        },
        FETCH_LIST({commit} , pageName){
            fetchList(pageName)
            .then(({data}) => commit('SET_LIST',data))
            .catch(error => console.log(error));
        }
        
    }