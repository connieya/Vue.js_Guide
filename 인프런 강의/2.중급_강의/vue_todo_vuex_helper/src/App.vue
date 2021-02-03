<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput ></TodoInput>
    <TodoList></TodoList>               
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
 import TodoHeader from './components/Header'
 import TodoInput from './components/Input'
 import TodoList from './components/List'
 import TodoFooter from './components/Footer'
export default {
  
  components: {

        // 향상된 객체 리터럴로 인해 축약할 수 있다. (속성명과 객채명이 같을 시  )
      TodoHeader,
      TodoInput,
      TodoList,
      TodoFooter
     

   }
 

}
</script>

<style>

  body {
    text-align: center;
    background-color: #f6f6f6;
  }
input{
  border-style: groove;
  width: 200px;
}
button{
  border-style: groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgb(0,0, 0,0.03);
}

</style>