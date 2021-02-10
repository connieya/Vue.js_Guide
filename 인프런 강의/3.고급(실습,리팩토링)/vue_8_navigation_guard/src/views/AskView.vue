<template>
<div>
   <list-item></list-item>
</div>
</template>

<script>

import ListItem from '../components/ListItem.vue'
import ListMixin from '../mixins/ListMixin';
import bus from '../utils/bus'
export default {
  components: { ListItem },
 
    // mixins: [ListMixin]


// 라이프 사이클 훅 
  mounted(){
     bus.$emit('end:spinner');
  }
  
}
</script>

<style>



</style>
