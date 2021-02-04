<template>
  <div>
      <div v-for="job in jobs">{{job}}</div>
  </div>
</template>

<script>
import {fetchJobsList} from '../api/index'
export default {
  data(){
    return {
      jobs: []
    }
  },
  // 컴포넌트가 생성되자마자 실행되는 로직
  created(){
    var vm = this;
    fetchJobsList()
    .then(function(response){
      console.log(response);
      vm.jobs = response.config
    })
    .then(function(error){

      console.log(error);
    })
    
  }

}
</script>

<style>

</style>