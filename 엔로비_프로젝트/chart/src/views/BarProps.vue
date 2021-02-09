<template>
  <div>
    <h1>Home</h1>
     <!-- <form v-on:submit.prevent="submitForm"> -->
            <div>
              <label for="username"> id: </label>
              <input type="text" id="target" v-model="target">
            </div>
            <div>
              <label for="password">pw:</label>
              <input type="text" id="password">
            </div>
            <button type="submit" v-on:click="getData">login</button>
          <!-- </form> -->

        <div>{{target}} </div>  
    <!-- <bar-props :chartValue="performanceData"></bar-props> -->
      <bar-props :chartData="NumValue" :chartLabels="DateValue" ></bar-props>
  </div>
</template>
<script>
import BarProps from '../components/BarProps.vue'
export default {
    components :{
        BarProps
    },
    data () {
      return {
       NumValue : [],
       DateValue : []
        // performanceData:{
        //    labels: ['2월01일','2월02일','2월3일','2월4일','2월5일','2월6일',this.addData(),this.addData()],
        //      datasets: [
        //     {
        //       label: '실적치',
        //      // backgroundColor: '#f87979',
        //       backgroundColor: 'yellow',
        //       pointBackgroundColor: 'red',
        //       borderWidth: 3,
        //       pointBorderColor: '#249EBF',
        //       data: [this.getData(), this.getData(), 111, 50, 90, 200, 20, 40, 50, 70, 90, 100]
        //       //data: Values
        //     }
        //   ]

        // }
        
        
        }
    },
    methods:{
      addData(){
        console.log(this.target);
        console.log(this.performanceData);
        return "2월7일";
      },
     
      getData(){
        console.log(this.target);
        this.NumValue.push(this.target);
      }
    },
   
   
    
}
</script>

<style>

</style>