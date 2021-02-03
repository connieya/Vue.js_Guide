<template>
  <section class="container">
     <h1>Demo examples of vue-chartjs</h1>
    <div class="columns">
      <div class="column">
        <h3>Line Chart</h3>
        <line-chart></line-chart>
      </div>
       <div class="column">
        <h3>Bar Chart</h3>
        <!--Bar Chart example-->
        <bar-chart></bar-chart>
      </div>
  </div>
   <div class="columns">
      <div class="column">
        <h3>Bubble Chart</h3>
        <!--Bubble Chart example-->
        <bubble-chart></bubble-chart>
      </div>
      <div class="column">
        <h3>Reactivity - Live update upon change in datasets</h3>
        <!--Reactivity Line Chart example-->
        <reactive :chart-data ="datacollection"></reactive>
        <button class="btn btn-primary" @click="fillData()">Random</button>
      </div>
    </div>
  </section>
</template>

<script>
import LineChart from '../components/LineChart.vue'
import BarChart from '../components/BarChart.vue'
import BubbleChart from '../components/BubbleChart.vue'
import Reactive from '../components/Reactive.vue'
  export default {
    name : 'VueChartJS',    
    components:{
        LineChart,
        BarChart,
        BubbleChart,
        Reactive

    },
    data(){
      return{
        datacollection : null
      }
    },
    created(){
      this.fillData()
        

      
    },
    methods:{
      fillData(){
        this.datacollection = {
      // Data for the y-axis of the chart
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          // Data for the x-axis of the chart
          data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
        }
      ]
    }
      },
    getRandomInt () {
    // JS function to generate numbers to be used for the chart
    return Math.floor(Math.random() * (50 - 5 + 1)) + 5
  }
    }

  }
  </script>

<style>

</style>