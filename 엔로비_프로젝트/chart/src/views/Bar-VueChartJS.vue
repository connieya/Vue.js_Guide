<template>
  <section class="container">
     <h1>Demo examples of vue-chartjs</h1>

        <h3>Bar Chart</h3>
        <!--Bar Chart example-->
           <!-- <form v-on:submit.prevent="submitForm"> -->
            <div>
              <label for="username"> id: </label>
              <input type="text" id="username" v-model="targetValue">
            </div>
            <div>
              <label for="password">pw:</label>
              <input type="text" id="password" v-model="password">
            </div>
            <!-- <button type="submit">등록</button> -->
            <button v-on:click="addData">등록</button>
          <!-- </form> -->
        <bar-chart-2 :propsdata="datacollection"></bar-chart-2>
  
  
  </section>
</template>

<script>
import BarChart2 from '../components/Bar-VueChartJS';
  export default {

    components:{
       BarChart2
      
    },
    data(){
      return{
        datacollection : null,
        targetValue : [],
        newArray : []

        
      }
    },
    created(){
      this.fillData()
      
    },
    methods:{
      addData(){
        console.log(this.targetValue);
          this.newArray.push(this.targetValue);
          this.targetValue= "";
      },
        fillData(){
          this.datacollection = {
        labels: ['2월1일', '2월2일', '2월3일' ,'2월4일' ,'2월5일','2월6일'],
        datasets: [
          {
            label: '목표치',
            backgroundColor: 'pink',
            data: [this.getData(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
           // data : this.newArray
          }
        ]
      } // datacolletion
        }, // fillData()
      getRandomInt () {
      // JS function to generate numbers to be used for the chart
      return Math.floor(Math.random() * (50 - 5 + 1)) + 20
      },
      getData(){
        return 40;
      },
   

  },
  // mounted() {
  //   setInterval(this.fillData, 2000);
  // }



 }
  </script>

<style>

</style>