<template>
  <div>
<ul class="news-list">
      <li v-for="item in listItems" class="post">
          <div class="points">
              {{item.points || 0}}
          </div>

          <div>
          <p class="news-title"> 
              <a v-bind:href="item.url"  target="_blank" >
              {{item.title}}
              </a>
           </p> 
          <small class="link-text">
            <!-- <template v-if="this.$route.path === '/jobs' " >
               {{item.time_ago}}   by
               {{item.domain}}

            </template> -->
            <!-- <template v-else> -->
              {{item.time_ago}}   by
              <router-link v-bind:to="`/user/${item.user}`" class="link-text">{{item.user}}</router-link>

            <!-- </template> -->
          </small>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
        computed:{
          listItems(){
            return this.$store.state.list;
          }


          // 이미 분기 처리했기 때문에 스토어에서 HOC 한거 바로 불러오면 됨
            // listItems(){
            //     const path = this.$route.path;
            // if(path ==='/news'){
            //   console.log(path);
            //     return this.$store.state.news;
            // }else if(path === '/ask'){
            //   console.log(path);
            //     return this.$store.state.ask;
            // }else if(path ==='/jobs'){
            //   console.log(path);
            //     return this.$store.state.jobs
            // }


            // }
        }
}
</script>

<style scoped>
.news-list{
  margin: 0;
  padding: 0;
}

.post{
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #eee;
  padding: 0.3rem;
  margin : 0.4rem;
}

.points{
  width: 80px;
  height: 60px;
  color: #42b883;
  display: flex;
  align-items: center;
  justify-content: center;
}
.link-text{
  color: #3b3939;
  font-weight: 500;
}
.news-title{
  margin: 0;
}

</style>
