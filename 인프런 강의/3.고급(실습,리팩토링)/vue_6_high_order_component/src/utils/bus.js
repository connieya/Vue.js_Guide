import Vue from 'vue'


// #1
// export const bus = new Vue();

//만약  #1번 같은 경우 App.vue에서 bus.js를 불러 온다면??

// import {bus} from './bus.js'; 이렇게 딱 정해서 불러와야함 



// #2
export default new Vue();


// 만약 #2번 같은 경우 App.vue 에서 bus.js를 불러온다면?

// import B from './bus.js'; 또는
// import Bus from './bus.js' 와 같이 아무렇게 이름을 선언할 수 있다.