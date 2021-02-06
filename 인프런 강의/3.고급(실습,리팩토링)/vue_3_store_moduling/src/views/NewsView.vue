<template>
  <div>
    <p v-for="item in this.$store.state.news">

         <a v-bind:href="item.url"  target="_blank" >{{item.title}}</a> 
        <small> 
            {{item.time_ago}} 
        </small>
            by 
            <!-- <router-link v-bind:to="'/user/'+item.user"> {{item.user}}</router-link> -->
            <router-link v-bind:to="`/user/${item.user}`"> {{item.user}}</router-link>

     </p>
  </div>
</template>

<script>

// immport axiox from 'axiox'; 
// 모든 컴포넌트 마다 라이브러리를  사용하니 모듈화 시킴
import {fetchNewsList} from '../api/index';

export default {
  // data(){            data가 필요 없다 왜냐히면 store에 있는 state 값을 다 들고 오기 때문이다.
  //   return {
  //     users : []
  //   }
  // },
  created(){
    this.$store.dispatch('FETCH_NEWS');


   }

}
</script>

<style>

</style>