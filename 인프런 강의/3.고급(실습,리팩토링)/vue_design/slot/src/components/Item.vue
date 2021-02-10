<template>
  <div>
      <!-- #1 -->
     <li>
      <slot> 
         <!-- 등록하는 곳에서 정의할 영역  -->
      </slot>

    </li>
      <!-- 위는 slot 방법 , 밑은 props 방법  -->

        <!-- #2 -->
     <!-- <li v-for="data in propsdata" >
        {{ data}}
       
      </li> -->
  </div>
</template>

<script>
export default {
    props : ['propsdata']

}
</script>

<style>

</style>