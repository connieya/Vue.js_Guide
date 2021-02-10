<template>
  <div>
     <ul>
        <!-- #1 -1 -->

      <!-- <item>아이템 1</item>
       <item>아이템 2</item>
       <item>아이템 3</item>
       <item>아이템 4</item>
       <item>아이템 5</item>  -->

        <!-- #1 -2  -->
        <!-- slot 도 2가지 방식으로 구현 할 수 있다. #1-2가 좀 더 프로그래머 같지?ㅋㅋ  -->
       <item v-for="i in items"> {{i}} </item>

       <item>아이템6 <button>클릭</button></item>
       <item>
         아이템 7
         <div>
         <img src="./assets/logo.png" alt="vue 로고" width="65px" >
         </div>

       </item>

        <!-- 위의 코드를 보면 slot 을 쓰는 이유를  알 수 있다. 
          요구사항에 따라 버튼을  추가로 넣을 수도 있고 이미지도 넣을 수 있다.
        !  -->



        <!-- 위는 slot 방법 , 밑은 props 방법  -->

        <!-- #2 -->
        <!-- <item :propsdata="items"></item> -->

     </ul>
  </div>
</template>

<script>
import Item from './components/Item.vue'


export default {
  components: { Item },


data(){
  return {
    items : ['아이템1','아이템2','아이템3','아이템4','아이템5']
    //items : "아이템1111111111"
  }

}



}
</script>

<style>

</style>