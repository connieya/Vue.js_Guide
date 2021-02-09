
<script>
import {Bar ,mixins} from 'vue-chartjs'
const {reactiveProp} = mixins;
export default {
    extends: Bar,
     mixins: [reactiveProp],
    props: {
        propsdata: {
        },
        options: {
         
      
        }
      }
    ,mounted () {
      //renderChart function renders the chart with the datacollection and options object.
      this.renderChart(this.propsdata, this.options)
    }

}
</script>

<style>

</style>