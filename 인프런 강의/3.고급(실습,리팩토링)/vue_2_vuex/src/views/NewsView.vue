<template>
  <div>
      <div v-for="user in this.$store.state.news">{{user.title}}</div>
  </div>
</template>

<script>

// immport axiox from 'axiox'; 
// 모든 컴포넌트 마다 라이브러리를  사용하니 모듈화 시킴
import {fetchNewsList} from '../api/index';

export default {
  // data(){            data가 필요 없다 왜냐히면 store에 있는 state 값을 다 들고 오기 때문이다.
  //   return {
  //     users : []
  //   }
  // },
  created(){
    this.$store.dispatch('FETCH_NEWS');

  //   var vm = this;

  //   // 1
  //  fetchNewsList()
  //   .then( function(response){
  //       vm.users = response.data;
  //   })
  //   .catch(function(error){
  //       console.log(error);
  //   })

   }

}
</script>

<style>

</style>