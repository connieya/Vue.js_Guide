<template>
  <div id="root">
      <p>{{originalPrice}}</p>
      <p>{{doublePrice}}</p>   <!--    doublePrice만 map helper 사용  -->
      <p>{{triplePrice}}</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    computed:{
        originalPrice(){
            return this.$store.getters.originalPrice;

        },
   
        ...mapGetters(
             ['doublePrice']
         ),

      
        triplePrice(){
            return this.$store.getters.triplePrice;
        }
    }
}
</script>

<style>

</style>