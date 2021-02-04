<template>
  <section class="line">
  <h3>Line Chart</h3>
  <div class="inputBox">
    <input type="text">
    <button v-on:click="addData">등록</button>
  </div>
   <line-chart id="line-chart" :data="chartData" ></line-chart>

   <h3>막대 그래프</h3>
   <bar-chart :data="barData"></bar-chart>
  </section>

</template>

<script>
export default {
  name: 'VueChartKick',
  data(){
    return {
      chartData: [
            {name:'목표치',data:[
              ['2월1일', 44], ['2월2일', 27], ['2월3일', 60],  ['2월4일', 22]
              ] },
            {name:'실적치',data:[]}
          ],
          barData :[ ['Word' ,100] ,['Play', 1492]  ]
          
  }
},
methods:{
  addData(){
    this.barData = ""
  }
}
}
</script>

<style>
.chartjs-render-monitor{
  width: 30%;
  height: 30%;
}
</style>