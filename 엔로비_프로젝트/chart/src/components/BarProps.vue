<script>
import {Bar} from 'vue-chartjs'
export default {
    extends: Bar,
    props : {
              //정해진 이름 , 라이브러리에서 제공한 것
              chartdata : {
              },
              options: {  
               }
    },
     mounted () {
      //renderChart function renders the chart with the datacollection and options object.
      this.renderChart(this.chartdata, this.options)
    
    }
}
</script>

<style>

</style>