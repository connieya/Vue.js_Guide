import {
    fetchAskList, 
    fetchItem, 
    fetchJobsList, 
    fetchList, 
    fetchNewsList, 
    fetchUserList} 
    from '../api/index';

export default {
        FETCH_NEWS(context){
            return fetchNewsList()
            .then(response =>{
                context.commit('SET_NEWS' , response.data);
                return response;
            })
            .catch(error =>{
                console.log(error);
            });
        },
        FETCH_ASK(context){
            console.log("context 속성 알아보기", context)
          return  fetchAskList()
            .then(response =>{
                context.commit('SET_ASK',response.data)
                
            })
            .catch(error =>{
                console.log(error);
            })

        },
        FETCH_JOBS({commit}){
          return  fetchJobsList()
            .then(({data}) =>{
                commit('SET_JOBS',data)
            })
            .catch(error => {
                console.log(error)
            })
        },
        FETCH_USER({commit} , name){
          return  fetchUserList(name)
            .then(({data}) =>{
                commit('SET_USER',data)
            })
        },
        FETCH_ITEM({commit} ,itemId){
            return fetchItem(itemId)
            .then(response =>{
                console.log('response 확인',response)
                commit('SET_ITEM' , response.data)
            })
        },
        //순서 2번
        FETCH_LIST({commit} , pageName){
            console.log("store , actions!!");
            //순서 3번
           return fetchList(pageName)
            .then(({data}) => {
                // 순서 4번
                console.log(4);
                commit('SET_LIST',data)
                
                })
            .catch(error => console.log(error));
        }
        
    }