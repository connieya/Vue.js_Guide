<template>
  <div>
    <app-header :title="appTitle"></app-header>
    <app-content :contentItem="items" @renew="renewItems"></app-content>

  </div>
</template>

<script>
import AppContent from './components/AppContent.vue'
import AppHeader from './components/AppHeader.vue'


export default {
  components: { AppHeader, AppContent },

data(){
  return {
    appTitle : 'Common Approach',
    items: [10,20,30],
  }
},

methods:{
  renewItems(){
    const Value = this.items;
    console.log(Value);
    const lastValue = this.items[Value.length-1];

   this.items.push(lastValue+10);

  
  },
},




} // export default
</script>

<style>

</style>