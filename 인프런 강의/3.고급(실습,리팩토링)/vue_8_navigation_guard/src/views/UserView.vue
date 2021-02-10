<template>
  <div>
     

    <user-profile :propsdata="userInfo"></user-profile>
     
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";


//import axios from 'axios';
export default {
      components: { UserProfile },
    computed:{
        userInfo(){
            return this.$store.state.user;
        }
    },
    created(){
        console.log(this.$route.params.id);
        const userName = this.$route.params.id;
        //axios.get(`htttp://api.hnpwa.com/v0/user/${userName}.json`);
    this.$store.dispatch('FETCH_USER',userName);
   }

}
</script>

<style>

</style>