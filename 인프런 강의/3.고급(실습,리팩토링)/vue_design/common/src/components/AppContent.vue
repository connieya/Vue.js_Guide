<template>
  <div>
      <ul>
          <li v-for="item in contentItem">
              {{item}}
          </li>
      </ul>
      <button @click="$emit('renew')">renew item</button>
  </div>
</template>

<script>
export default {
    props:{
        // contentItem은  Array 로 들어와야한다고
        // vue.js에서 요구한다.
        contentItem:{
            type: Array,
            required: true,
        }, 

    }

}
</script>

<style>

</style>