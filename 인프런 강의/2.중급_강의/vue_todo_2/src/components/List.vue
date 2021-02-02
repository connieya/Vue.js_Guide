<template>
  <div>
    <ul>
      <li v-for="(todoItem ,index ) in propsdata" v-bind:key="todoItem.item" class="shadow">

        <i class="checkBtn fas fa-check"  v-bind:class ="{checkBtnCompleted : todoItem.completed}" 
        v-on:click="toggleComplete(todoItem , index)"></i>

        <span v-bind:class="{textCompleted: todoItem.completed}" >{{todoItem.item}}</span>

      <span class="removeBtn" v-on:click="removeTodo(todoItem ,index)">
        <i class="fas fa-trash-alt"></i>
      </span>


      </li>
    </ul>
          <!-- v-bind:class 이해하기 위에 todoItem.completed 가 true이면 textCompleted 클래스를 적용하겠다.  -->
  </div>
</template>

<script>
export default {
  props: ['propsdata'],

  methods:{
    removeTodo: function(todoItem , index){
        console.log("list에서 데이터" , todoItem, index)

        this.$emit('removeItem' ,todoItem,index);
        
    },
    toggleComplete : function(todoItem ,index){
      this.$emit('toggleItem', todoItem, index)
      

    }
  },
  

}
</script>

<style>
ul{
  list-style: none;
  padding-left : 0px;
  margin-top : 0;
  text-align: left;
  width:40%;
  margin : 0 auto;
}

li{
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background-color: white;
  border-radius: 5px;

}
  .removeBtn {
    margin-left: auto;
    color: #de4343
  }

.checkBtn{
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;

}
.checkBtnCompleted{
  color:#b3adad;

}
.textCompleted{
  text-decoration: line-through;
  color: #b3adad;

}

</style>