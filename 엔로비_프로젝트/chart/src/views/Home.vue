<script>
import {Bar} from 'vue-chartjs'
export default {
    extends: Bar,
    data () {
      return {
        // 크게 datacollection , options 두개의 객체 
        datacollection: {
          //Data to be represented on x-axis
        //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          labels: ['2월1일','2월2일','2월3일','2월4일'],
          datasets: [
            {
              label: '목표치',
             // backgroundColor: '#f87979',
              backgroundColor: 'green',
              pointBackgroundColor: 'red',
              borderWidth: 3,
              pointBorderColor: '#249EBF',
              //Data to be represented on y-axis
              //data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100]
              data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100]
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