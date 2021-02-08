<template>
  <div>
         
          <div class="userId"> id: {{itemInfo.id}}</div> 
          <div class="userDetail">
          <router-link :to="`/user/${itemInfo.user}`"> <h2>  <i class="far fa-user"></i>  {{itemInfo.user}}</h2> </router-link>

                <p> <i class="fas fa-star"></i>  {{itemInfo.points}}</p>
                <p> <i class="fas fa-history"></i> {{itemInfo.time_ago}}</p>
           </div>
  </div>
</template>

<script>
export default {
computed:{
    itemInfo(){
      return this.$store.state.items
    }
    
  },
  created(){
    const itemId = this.$route.query.id;
    console.log(this.$route.query.id)
    this.$store.dispatch('FETCH_ITEM' , itemId);
  }
}
</script>

<style scoped>
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
.fa-star{
  color: #c9df4d;
  font-size: 1.6rem;
}
.fa-history{
  color: #af1da88c;
  font-size: 1.9rem;
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