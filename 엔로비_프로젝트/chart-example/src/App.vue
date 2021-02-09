<template>
  <div>
    
    <Header></Header>
    <!-- <Main></Main> -->
       <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
// import Main from './view/Main.vue'
export default {
  components: { Header},

}
</script>

<style>

</style>