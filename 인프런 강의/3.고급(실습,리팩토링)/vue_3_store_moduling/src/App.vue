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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>