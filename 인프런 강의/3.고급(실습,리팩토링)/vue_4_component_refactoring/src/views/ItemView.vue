<template>
  <div>
    <section>
      <div class="title">
      <h1>{{itemInfo.title}}</h1>
      </div>
        
      <div>
        <!-- <router-link v-bind:to="`/user/${iteminfo.user}`">
          </router-link> -->
          <small> id: {{itemInfo.id}}</small> 
         
          <router-link :to="`/user/${itemInfo.user}`"> <h2>  <i class="far fa-user"></i>  {{itemInfo.user}}</h2> </router-link>

          <div class="userDetail">
                <p> <i class="fas fa-star"></i>  {{itemInfo.points}}</p>
                <p> <i class="fas fa-history"></i> {{itemInfo.time_ago}}</p>
           </div>
            </div>

      <div>

      </div>
    </section>
    <section>

    </section>

    <div class="contentBox">

      <p v-html="itemInfo.content">   </p>
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

<style> 
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
  background-color: #ec5813;
  margin: auto;
  padding: 6px;
}
.contentBox{
  margin: 3px;
  padding: 0.8rem;
}
</style>