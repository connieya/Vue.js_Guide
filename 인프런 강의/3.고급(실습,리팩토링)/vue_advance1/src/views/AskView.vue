<template>
<div>
  <div v-for="ask in asks" >{{ask.title}}</div>
</div>
</template>

<script>
import {fetchAskList} from '../api/index'

export default {
  data(){
    return {
      asks: []
    }
  },
    created(){
      var vm = this;
      fetchAskList()
      .then(function(response){
          vm.asks = response.data;
      })
      .then(function(error){
          console.log(error);
      })
    }
}
</script>

<style>

</style>