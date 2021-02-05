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
            <button type="submit" v-on:click="addData">login</button>
          <!-- </form> -->
    <bar-props :chartdata="performanceData"></bar-props>
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
        target : "",
        performanceData:{
           labels: ['2월1일','2월2일','2월3일','2월4일','2월5일','2월6일',this.addData(),this.addData()],
             datasets: [
            {
              label: '실적치',
             // backgroundColor: '#f87979',
              backgroundColor: 'yellow',
              pointBackgroundColor: 'red',
              borderWidth: 3,
              pointBorderColor: '#249EBF',
              data: [this.getData(), 232, 111, 50, 90, 200, 20, 40, 50, 70, 90, 100]
            }
          ]

        }
        
        
        }
    },
    methods:{
      addData(){
        console.log(this.target);
        return "2월7일"
      },
     
      getData(){
        console.log("tqttq");
        return 150;
      }
    }
   
    
}
       
</script>

<style>

</style>