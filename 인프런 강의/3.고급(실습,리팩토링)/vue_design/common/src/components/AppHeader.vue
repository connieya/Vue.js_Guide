<template>
      
      <header>
          <h1>{{title}}</h1>
      </header>
</template>

<script>
export default {
    // props:['title'], 
    // props에  validation 문법으로
    // type , required를 지정할 수도 있다.
    props:{
        title : String,
    }
}
</script>

<style>

</style>