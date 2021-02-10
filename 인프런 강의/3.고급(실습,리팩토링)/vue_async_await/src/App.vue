<template>
  <div>
    <button @click="loginUser1">login</button>
    <h1>List</h1>
    <ul>
      <li v-for="item in items">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import handleExcep from './utils/handler'

export default {
  data(){
    return {
      items : [],
    }
  },
  methods:{
    loginUser(){
      axios.get('http://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        console.log(response);
        if(response.data.id === 1){
          console.log('사용자가 인증되었습니다.');
          axios.get('http://jsonplaceholder.typicode.com/todos')
          .then(response => {
            this.items = response.data;
          })
          .catch();
        }
      })
      .catch(error => console.log(error))
    },

    // 위의 코드와 비교해서 아래 함수는 async와 await 사용하기


    // 위와 다르게 try catch로 예외 처리하기
    async loginUser1(){

        try {
            var response = await axios.get('http://jsonplaceholder.typicode.com/users/1');
            // 도대체 promise가 뭐냐??? 응?? 뭐냐고!! 위에 loginUser 가 promise다 !! 
            if(response.data.id ===1){
              console.log('사용자가 인증되었습니다.');
              var list = await axios.get('http://jsonplaceholder.typicode.com/todos');
              this.items = list.data;
            }
        }catch (error) {
            handleExcep(error)
            console.log(error);
        }

        // 이렇게 axios에서 받아온 데이터를 변수 안에 담으려면 앞에 await를 붙여야한다.
       
    }
  }

}
</script>

<style>

</style>