<template>
  <div>
      <div v-for="user in users">{{user}}</div>
  </div>
</template>

<script>

// immport axiox from 'axiox'; 
// 모든 컴포넌트 마다 라이브러리를  사용하니 모듈화 시킴
import {fetchNewsList} from '../api/index';

export default {
  data(){
    return {
      users : []
    }
  },
  created(){
    var vm = this;
   fetchNewsList()
    .then( function(response){
        vm.users = response.data;
    })
    .catch(function(error){
        console.log(error);
    })
  }

}
</script>

<style>

</style>