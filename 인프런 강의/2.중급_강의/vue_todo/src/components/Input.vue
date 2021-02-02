<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo"> 
    <span class="addContainer" v-on:click="addTodo">

      <i class="fas fa-plus addBtn"></i>

    </span>
  </div>
</template>

<script>
export default {
  data : function(){
    return {
      newTodoItem: ""
    }
  },
  methods:{
    addTodo : function(){
      if(this.newTodoItem !== '') {

        var obj = {completed : false, item : this.newTodoItem}
      console.log(this.newTodoItem);
      //지정하는 로직
      // localstorage.setItem();
      localStorage.setItem(this.newTodoItem, JSON.stringify(obj));

      this.newTodoItem= ""; // 입력하고 빈칸으로 만들기 
      }

    }
  }
}
</script>

<style scoped>

input:focus{
  outline:none;
}
.inputBox {
  background-color: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  width: 40%;
  margin: 5px auto;
}

.inputBox input {
  border-style: none;
  font-size: 0.9rem;

}
.addContainer{
  float: right;
  background : linear-gradient(to right, #6478fb ,#8763fb);
  display : block;
  width : 3rem;
  border-radius: 0 5px 5px 0;

}

.addBtn{
  color:white;
  vertical-align: middle;
}

</style>