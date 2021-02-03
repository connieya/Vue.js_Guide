<template>
<div class="clearAllcontainer">
  <span v-on:click="clearTodo"  class="clearAllBtn">Clear All</span>
</div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  methods:{

    ...mapMutations({
      clearTodo : 'clearItems'

    })
        // 위와 아래는 같다. 위는 helper를 사용 한것, 밑은 사용하지 않아서
        //  $store와 commit을 사용하여 store.js에 접근한 것임

    // clearTodo : function(){
    //     //this.$emit('allClear')
    //     this.$store.commit('clearItems')
     
    
    // }
  }
}
</script>

<style scoped>

.clearAllcontainer{
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;

}

.clearAllBtn{
  color: #e20303;
  display: block;

}
</style>