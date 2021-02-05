<template>
  <section class="container">
    <h1>Demo examples of vue-chartkick</h1>
    <div class="columns">
      <div class="column">
        <h3>Line Chart</h3>
        <!--Line Chart example-->
        <line-chart :data="chartData"></line-chart>
      </div>
      <div class="column">
        <h3>Bar Chart</h3>
        <!--Bar Chart example-->
        목표치
        <bar-chart :data="barData"></bar-chart>
      </div>
    </div>
    <div class="columns">
      <div class="column">
       <bar-chart :data="chartData2"></bar-chart>
        <!--Scatter chart example-->
      </div>
      <div class="column">
        <h3>Downloadable Line Chart</h3>
        <!--Downloadable line chart-->
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'VueChartKick',
    data () {
      return {
        chartData: [
            {name:'목표치',data:[['Jan', 30], ['Feb', 27], ['Mar', 60], ['Apr', 55], ['May', 37], ['Jun', 40], ['Jul', 69], ['Aug', 33], ['Sept', 76], ['Oct', 90], ['Nov', 34], ['Dec', 22]]},
            {name:'실적치',data:[['Jan', 50], ['Feb', 30], ['Mar', 43], ['Apr', 31], ['May', 65], ['Jun', 40], ['Jul', 69], ['Aug', 33], ['Sept', 76], ['Oct', 90], ['Nov', 34], ['Dec', 22]]}
          ],
        
        
        chartData2: [['2월1일',60],['2월2일',70]],
       barData: [ ['2월1일' ,100] ,['2월2일', 1492]  ]

        
      }
    }

}
</script>

<style>

</style>