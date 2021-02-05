<template>
  <section class="container">
     <h1>Demo examples of vue-chartjs</h1>

        <h3>Bar Chart</h3>
        <!--Bar Chart example-->
           <form v-on:submit.prevent="submitForm">
            <div>
              <label for="username"> id: </label>
              <input type="text" id="username" v-model="date">
            </div>
            <div>
              <label for="password">pw:</label>
              <input type="text" id="password" v-model="password">
            </div>
            <button type="submit">login</button>
          </form>
        <bar-chart-2 :chartdata="datacollection"></bar-chart-2>
  
  
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
        labels: [],
        date : ""
        
      }
    },
    created(){
      this.fillData()
      
    },
    methods:{
      fillData(){
        this.datacollection = {
      labels: ['2월1일', '2월2일', '2월3일' ,'2월4일' ,'2월5일','2월6일'],
      datasets: [
        {
          label: '목표치',
          backgroundColor: 'pink',
          data: [this.getData(), this.getRandomInt(), this.getData2(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
        }
      ]
    } // datacolletion
      }, // fillData()
    getRandomInt () {
    // JS function to generate numbers to be used for the chart
    return Math.floor(Math.random() * (50 - 5 + 1)) + 5
  },
  getData(){
    return 120;
  },
  getData2(){
   // this.datacollection.push("2월6일")
  }
    }

  }
  </script>

<style>

</style>