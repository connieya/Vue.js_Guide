<template>
  <div>
        <!-- #1  -->
  <!-- <input type="checkbox"  v-model="propsCheck"> -->

  <!-- <input type="text" v-model="propsCheck"> -->
  <!-- {{propsCheck}} -->


      <!-- #2 로 해결 -->
    <input type="checkbox" :value="value" @click="toggleCheck" >
  </div>

  
</template>

<script>
export default {
  // props: ['propsCheck'],
  
  // data(){
  //   return{
  //     propsCheck : "하위"
  //   }
  // }

  // created(){
  //   console.log(this.propsCheck);
  // }

    props : ['value'],
    methods : {
      toggleCheck(){
        this.$emit('input' , !this.value);
      }
    }
}

</script>

<style>

</style>