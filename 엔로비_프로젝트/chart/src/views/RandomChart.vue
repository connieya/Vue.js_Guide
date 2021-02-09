<template>
  <div class="small">
    <line-props :chart-data="datacollection"></line-props>
    <button @click="fillData()">Randomize</button>
  </div>
</template>

<script>
import LineProps from '../components/LineProps.vue'

  export default {
    components: {
        LineProps
    },
    data () {
      return {
        datacollection: null
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: [this.getRandomInt(), this.getRandomInt()],
          datasets: [
            {
              label: '실적치',
              backgroundColor: 'red',
              data: [this.getRandomInt(), this.getRandomInt()]
            }, {
              label: '목표치',
              backgroundColor: 'blue',
              data: [this.getRandomInt(), this.getRandomInt()]
            }
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
  }
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>