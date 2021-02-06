<template>
<div>
   <div >
           <p v-for="item in askItems">
               <!-- v-bind:href 축약 문법 -->
         <a :href="item.url" target="_blank" rel="noopener noreferrer">{{item.title}}</a>  , 
            {{item.time_ago}} <small>by </small>  <router-link to="/user">{{item.user}} </router-link>
         </p>
      </div>
</div>
</template>

<script>
import {mapGetters, mapState} from 'vuex';

export default {

//  AskView는 맵 헬퍼를 사용하였다.
  computed:{
    ...mapGetters({
      askItems : 'fetchedAsk'
    })

    //#2
    // ...mapState({
    //   fetchedAsk: state => state.ask

    // })
    //#1
    // ask(){
    //   return this.$store.state.ask;
    // }
  },
  
    created(){
      this.$store.dispatch('FETCH_ASK');
    
    }
}
</script>

<style>

</style>