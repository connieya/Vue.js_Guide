<template>
  <div>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  components: {
    Header
  }

}
</script>

<style>
body , html{
    font-size: 35px;
    height: 100%;
    margin: 0 auto;
}

</style>