
<script>
import {Bar} from 'vue-chartjs'
export default {
    extends: Bar,
    data () {
      return {
        datacollection: {
          //Data to be represented on x-axis
        //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          labels: ['2월1일','2월2일','2월3일','2월4일'],
          datasets: [
            {
              label: '목표치',
             // backgroundColor: '#f87979',
              backgroundColor: 'pink',
              pointBackgroundColor: 'white',
              borderWidth: 3,
              pointBorderColor: '#249EBF',
              //Data to be represented on y-axis
              data: [40, 20, 80 ]
            },
                  {
              label: '실적치',
             // backgroundColor: '#f87979',
              backgroundColor: 'blue',
              pointBackgroundColor: 'white',
              borderWidth: 3,
              pointBorderColor: '#249EBF',
              //Data to be represented on y-axis
              data: [20, 100, 200 ]
            }
          ]
        },
        //Chart.js options that controls the appearance of the chart
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


    mounted () {
      //renderChart function renders the chart with the datacollection and options object.
      this.renderChart(this.datacollection, this.options)
    }

}
</script>

<style>

</style>