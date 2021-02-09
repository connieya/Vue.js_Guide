<script>
import {Bar} from 'vue-chartjs'
export default {
    extends: Bar,
    props : {
              //정해진 이름 , 라이브러리에서 제공한 것
              chartValue : {
                type : Object,
                default :null
              },
              options: {  
               }
    },
     mounted () {
      //renderChart function renders the chart with the datacollection and options object.
      this.renderChart(this.chartValue, this.options)
    
    }
}
</script>

<style>

</style>