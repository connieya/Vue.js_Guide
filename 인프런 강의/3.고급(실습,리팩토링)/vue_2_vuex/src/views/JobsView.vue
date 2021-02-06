<template>
  <div>
      <div v-for="job in this.$store.state.jobs">{{job.title}}</div>
  </div>
</template>

<script>
export default {
  
  // 컴포넌트가 생성되자마자 실행되는 로직
  created(){
      this.$store.dispatch('FETCH_JOBS')
    
  }

}
</script>

<style>

</style>