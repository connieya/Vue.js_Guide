<template>
  
  <div>
    <fetch-data url="https://jsonplaceholder.typicode.com/users/1">
        <div slot-scope="{response, loading}" >
            <!-- fetch-data 컴포넌트에 있는 $scopedSlot 데이터를 받음  -->
        <div v-if="!loading">
          {{response}}
        </div>

        <div v-if="loading">
          Loading ...
        </div>

        </div>
    </fetch-data>
  </div>
</template>

<script>
import FetchData from './components/FetchData.vue'
export default {
  components: { FetchData },

}
</script>

<style>

</style>