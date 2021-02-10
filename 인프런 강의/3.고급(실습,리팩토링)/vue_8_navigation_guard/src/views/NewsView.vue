<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import ListMixin from '../mixins/ListMixin';

export default {
  
  components:{
    ListItem,
  },
  //mixins: [ListMixin],


 // 라이프 사이클 훅
  // created(){
  //   bus.$emit('start:spinner');
   

  // this.$store.dispatch('FETCH_NEWS')
  //   .then( ()=> {
  //       console.log('fetched');
  //     bus.$emit('end:spinner');
  //   })
  //   .catch( (error)=>{console.log(error);});
    
   
  // } // created()

} // export default
</script>


