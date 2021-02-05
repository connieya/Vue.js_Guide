

<script>
import {Line} from 'vue-chartjs'
export default {
 extends: Line,
    data () {
      return {
        datacollection: {
          //Data to be represented on x-axis
          labels: ['2월1일', '2월2일', '2월3일' ],
          datasets: [
            {
              label: '목표치',
              backgroundColor: '#f87979',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              //Data to be represented on y-axis
              data: [90, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100]
            },
            {
              label: '실적치',
              backgroundColor: 'green',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              //Data to be represented on y-axis
              data: [24, 20, 90, 50, 90, 10, 20, 40, 50, 70, 90, 100]
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