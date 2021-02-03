<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput ></TodoInput>
    <TodoList v-bind:propsdata="todoItems"  v-on:toggleItem="toggleCompleted"></TodoList>
                  <!--  속성이름 ,현재 컴포넌트의 데이터 -->
    <TodoFooter v-on:allClear="clearItems"></TodoFooter>
  </div>
</template>

<script>
 import TodoHeader from './components/Header'
 import TodoInput from './components/Input'
 import TodoList from './components/List'
 import TodoFooter from './components/Footer'
export default {
  data(){
    return {
       todoItems : []
    }
  },
  methods:{
    // methods 안에 속성 메서드 addOneItem를 es6 문법으로 축약하였다 
   
    
    
    
  },
  
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