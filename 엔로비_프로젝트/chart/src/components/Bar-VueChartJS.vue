
<script>
import {Bar} from 'vue-chartjs'
export default {
    extends: Bar,
    props: {
        chartdata: {
        },
        options: {
         
      
        }
      }
    ,mounted () {
      //renderChart function renders the chart with the datacollection and options object.
      this.renderChart(this.chartdata, this.options)
    }

}
</script>

<style>

</style>