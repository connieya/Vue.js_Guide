<template>
  <div id="app">
   
    

    <tool-bar></tool-bar>
    <!-- url이 만약 jobs
    <JobsView></JobsView>
     -->


     <!-- router 트랜지션 (transition)  -->
     <transition name="fade">
     <router-view></router-view>
    </transition>
  </div>
</template>

<script>

import ToolBar from './components/ToolBar.vue';

export default {
  components:{
    ToolBar
  }

}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
a{
  text-decoration: none;
  color: #4b4949;
}
a.router-link-exact-active{
  text-decoration: underline;
  
}
a:hover{
  color: #42b883;
  text-decoration: underline;
  font-weight: 600;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>