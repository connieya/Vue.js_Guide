
<script>
import {Line} from 'vue-chartjs'

export default{
    name: 'LineChart', 
    extends: Line, 
    props: ['chartData'],
    mounted(){
         this.init()
    },
    methods:{
        init() {
             let data = this.chartData.chartData
             let datasets = [] 
             let pos = 0 
             data.forEach((site) => { 
                 let colors = this.colorSets[pos] 
                 datasets.push({ 
                     label: site.label,
                      borderWidth: 2, 
                      borderColor: colors.back, 
                      backgroundColor: colors.back,
                       pointBorderColor: colors.fore, 
                       pointBackgroundColor: colors.fore, 
                       fill: false, data: site.data 
                       }) 
                       pos++ 
                       }) 
                       this.datacollection = { 
                           labels: this.chartData.labels,
                            datasets: datasets } 
                            this.render() 
                            },
                            render() { 
                                this.renderChart(this.datacollection, this.options
                                ) }


    }
}
</script>

<style>

</style>