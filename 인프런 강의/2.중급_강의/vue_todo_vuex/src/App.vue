<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
        <!-- 하위 컴포넌트에서 발생한 이벤트 이름 , 현재 컴포넌트 메소드 명 -->

    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleCompleted"></TodoList>
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
   
    removeOneItem(todoItem, index){
        console.log("APP 에서 데이터" ,todoItem, index);
        localStorage.removeItem(todoItem.item);
         this.todoItems.splice(index,1); // 배열 api , 해당 index 중 1개를 지운다.
    },
    toggleCompleted(todoItem, index){
         
        this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearItems: function(){
        localStorage.clear();
        this.todoItems = [];
    }
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