import {  Line,  mixins} from 'vue-chartjs'
const {
  reactiveProp
} = mixins

export default {
  name: 'line-chart',
  extends: Line,
  mixins: [reactiveProp],
  props: {
    chartData: {
      type: Array,
      required: true
    },
    chartLabels: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      options: {
        scales: {
          yAxes: [{
            display: true
          }],
          xAxes: [{
            display: false
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
  mounted() {
    this.renderChart({
      labels: this.chartLabels,
      datasets: [{
        label: 'Temperature',
        colors: '#000000',
        backgroundColor: '#000000',
        data: this.chartData
      }]
    }, this.options)
  }
}