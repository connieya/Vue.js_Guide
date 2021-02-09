<script>
import {Bar} from 'vue-chartjs'
export default {
    extends: Bar,
    data(){
      return{
           options: {  
                  scales: {
                    yAxes: [{
                       ticks: {
                        beginAtZero: true
                      },
                       gridLines: {
                        display: true
                      }
                     }],
                     xAxes: [ {
                        gridLines: {
                        display: false
                       }
                     }]
                   },
                   legend: {
                     display: true
                   },
                   responsive: true,
                  maintainAspectRatio: false
               }
      }

    },
    props : {
             
              // chartValue : {
              //   type : Object,
              //   default :null
              // },
            chartData: {
            type: Array,
            required: true
          },
          chartLabels: {
            type: Array,
            required: true
          }

           
      },
     mounted () {
      //renderChart function renders the chart with the datacollection and options object.
      // this.renderChart(this.chartValue, this.options)
       this.renderChart({
        
      labels: ['2월01일','2월02일','2월3일','2월4일','2월5일','2월6일'],
      datasets: [{
        label: '실적치',
        colors: 'green',
        backgroundColor: 'red',
        data: this.chartData
      }]
    
      }, this.options)     
    
    }
}
</script>

<style>

</style>