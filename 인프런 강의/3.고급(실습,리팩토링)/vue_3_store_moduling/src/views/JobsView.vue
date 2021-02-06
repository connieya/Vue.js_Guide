<template>
  <div>
      <div >
           <p v-for="job in this.$store.state.jobs">
               <!-- v-bind:href 축약 문법 -->
         <a :href="job.url" target="_blank" rel="noopener noreferrer">{{job.title}}</a>  , 
            {{job.time_ago}} <small>from </small> {{job.domain}}
         </p>
      </div>
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