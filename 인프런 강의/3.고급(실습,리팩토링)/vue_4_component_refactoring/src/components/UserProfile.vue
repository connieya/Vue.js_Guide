<template>
  <div class="userContainer">
         <h2>UserPropfile.vue</h2>
          <div class="userId"> No: {{userInfo.created_time}}</div> 
          <div class="userDetail">
         
          <h2>  <i class="far fa-user"></i>  {{userInfo.id}}</h2> 
        

                <p> <i class="far fa-thumbs-up"></i> {{userInfo.karma}}</p>
                <p> <i class="fas fa-sign-in-alt"></i> {{userInfo.created}}</p>
           </div>
  </div>
</template>

<script>
export default {
  computed:{
        userInfo(){
            return this.$store.state.user;
        }
    },
    


}
</script>

<style scoped>
.userContainer{
  border: 2px solid #646322;
  width: 80%;
  margin: 3rem auto;
  text-align: center;
  height: 60%;
}
.userId{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 0.5rem;
  padding: 6px;
  color: #6f7177;
  font-weight: 600;
}
.fa-user {
  font-size: 2.7rem;
  margin: 0 6px;
  color: #1232e9;
}
.userDetail{
  display: flex;
  justify-content: space-around;
  
}
.fa-thumbs-up{
  color: #c9df4d;
  font-size: 2.7rem;
}
.fa-sign-in-alt{
  color: #af1da88c;
  font-size: 2.9rem;
}
.title{
  background-color: #f0e6e3;
  margin: auto;
  padding: 6px;
}
.contentBox{
  margin: 3px;
  padding: 0.8rem;
}
</style>