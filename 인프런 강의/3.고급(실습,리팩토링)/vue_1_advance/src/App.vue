<template>
  <div id="app">
   
    

    <tool-bar></tool-bar>
    <!-- url이 만약 jobs
    <JobsView></JobsView>
     -->
     <router-view></router-view>
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

</style>