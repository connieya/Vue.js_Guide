<template>
  <!-- props 로 데이터를 넘기면 생기는 문제점을  컴포넌트에 v-model로 내려보았다.  -->
  <!-- #1  -->
  <!-- <check-box :propsCheck="checked"></check-box> -->

  <!-- #2  props 대신 v-model로 해결  -->
  <check-box v-model="checked"></check-box>
</template>

<script>
import CheckBox from './components/CheckBox.vue'
export default {
  components: { CheckBox },

  data(){
    return {
    //  checked: "안녕",
     checked : false
    }
  }

}
</script>

<style>

</style>