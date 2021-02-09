<template>
  <div>
      <canvas ref="barChart" id="barChart" width="300" height="300"></canvas>
  </div>
</template>

<script>

export default {
    props : ['propsdata'],

 mounted(){
    // var ctx = document.getElementById('barChart'); 
    //var ctx = this.$refs.barChart;
    //myChart.data.datasets[1].data[1] = 60;
   // myChart.update();
    var myChart = new this.$_Chart(this.$refs.barChart, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: this.propsdata
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
  }
}
</script>

<style>

</style>