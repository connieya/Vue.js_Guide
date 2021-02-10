import {
    fetchAskList, 
    fetchItem, 
    fetchJobsList, 
    fetchList, 
    fetchNewsList, 
    fetchUserList} 
    from '../api/index';

export default {
       async FETCH_NEWS(context){
           // 애초에 await가 promise에 .then()에 있는 data를 다 받는것이다. 그걸 이렇게 한줄로 표현 한것임
           const response = await fetchNewsList();
           context.commit('SET_NEWS' , response.data) ;
           return response; // 만약 return을 안하면 저번처럼 화면 상에 비동기를 보장 할 수 없다
           // 저번에  Spinner 할 때!!!!!!!!!
           // 즉 return을 해야지 FETCH_NEWS가 다 끝나고 다음 로직이 실행 된다.
        },
        async FETCH_ASK(context){
            try {
                  const response = await  fetchAskList();
                context.commit('SET_ASK', response.data);
                return response
                
            } catch (error) {
                console.log(error);
            }

          
        },

        async FETCH_JOBS({commit}){
            try {
                const response = await  fetchJobsList();
                commit('SET_JOBS', response.data);
                return response
            } catch (error) {
                console.log(error);
            }

            
        },

        async FETCH_USER({commit} , name){
            const response = await fetchUserList(name);
            commit('SET_USER', response.data);
            return response
        },
        async FETCH_ITEM({commit} ,itemId){
            const response = await fetchItem(itemId);
            commit('SET_ITEM', response.data);
            return response
        },
        async FETCH_LIST({commit} , pageName){
           const response =  await fetchList(pageName);
           commit('SET_LIST', response.data);
           return response 
       
        }
        
    }