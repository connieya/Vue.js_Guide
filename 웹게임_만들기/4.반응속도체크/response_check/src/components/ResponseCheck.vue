<template>
  <div>
      <div id="screen" v-bind:class="state" @click="onClickScreen">
          {{message}}
      </div>
    <template v-show="result.length ">    <!-- result.length가 true면 화면에 보이고 false면 보이지 않는다. -->
      <div>평균 시간:{{average}}ms</div>
      <button @click="onReset">리셋</button>
     </template> <!-- v-show를 쓰기 위해 div태그로 감쌀 필요없다 template를 사용함! -->
  </div>
</template>

<script>
let startTime = 0;
let endTime = 0;
let timeout = null;
export default {
 data() {
    return {
      result: [],
      state : 'waiting',
      message : '클릭해서 시작하세요!'
    }
  },
  computed:{ // date를 가공하거나 계산 할때 사용 함
      average(){ // 또한 값이 캐싱된다. ex) data 에 message값이 바뀔 때 computed로 관리하면 영향을 안받는다.
          return this.result.reduce( (a,c) => a+c,0 ) / this.result.length || 0 ;
      }
  },
  methods:{
      onReset(){
          this.result = [];
      },
    onClickScreen(){
        if(this.state === 'waiting'){
            this.state = 'ready';
            this.message ='초록색이 되면 클릭하세요';
            timeout = setTimeout( () =>{
                this.state = 'now';
                this.message ='지금 클릭!';
                startTime = new Date();
            }, Math.floor(Math.random()* 1000)+2000);
        }else if (this.state === 'ready'){
            clearTimeout(timeout)
            this.state = 'now';
            this.message = "너무 빨라요 초록색이 된 후에 클릭하세요!!"

        }else if(this.state=== 'now'){
            endTime = new Date();
            this.state = 'waiting';
            this.message ="클릭해서 시작하세요!"
            this.result.push(endTime - startTime);
        }
    }
  }
}
</script>

<style scoped>
#screen{
    width: 300px;
    height: 200px;
    text-align: center;
    user-select: none;
}
.waiting{
    background-color: aqua;
}
#screen.ready{
    background-color: red;
    color: white;
}
#screen.now{
    background-color: greenyellow;
}

</style>