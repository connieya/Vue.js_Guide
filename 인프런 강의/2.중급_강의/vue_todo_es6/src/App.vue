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
  data: function(){
    return {
       todoItems : []
    }
  },
  created : function(){
  //  console.log("created")
    if(localStorage.length>0){
      for(let i=0; i<localStorage.length; i++){
        if(localStorage.key(i) !=='loglevel:webpack-dev-server' )
        // this.todoItems.push(localStorage.key(i));
       this.todoItems.push( JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
  },
  methods:{
    addOneItem: function(todoItem){
          const obj = {completed : false, item : todoItem}
         localStorage.setItem(todoItem, JSON.stringify(obj));
         this.todoItems.push(obj);

    },
    removeOneItem: function(todoItem, index){
        console.log("APP 에서 데이터" ,todoItem, index);
        localStorage.removeItem(todoItem.item);
         this.todoItems.splice(index,1); // 배열 api , 해당 index 중 1개를 지운다.
    },
    toggleCompleted: function(todoItem, index){
        // todoItem.completed  = !todoItem.completed;  아래와 동일한 코드이다. 컴포넌트간 경계를 명확하게 하기 위헤서
        // 위의 코드는 이벤트로 받아온 값을 바로 또 적용하니깐? 
        this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearItems: function(){
        localStorage.clear();
        this.todoItems = [];
    }
  },
  
  components: {

      'TodoHeader' : TodoHeader,
      'TodoInput' : TodoInput,
      'TodoList' : TodoList,
      'TodoFooter' : TodoFooter

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