<template>
  <div>
    <form @submit.prevent="submitForm">
      <input type="text" v-model="address">
      <button type="submit">등록</button>
    </form>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  data:function() {
return {
    address : ''
  };
} ,
methods:{
  submitForm : function(address){
    axios.get(`http://localhost:8000/api/map/${address}`)
    .then(function(response){
      console.log(response)
    })
    .catch(function(error){
      console.log(error);
    });
  }
}

}
</script>

<style>

</style>