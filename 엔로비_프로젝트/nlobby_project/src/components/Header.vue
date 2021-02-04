<template>
    <header>
  <div class="container">
      <i class="fas fa-industry industryIcon"></i>
      <span>생산량 관리 시스템</span>
  </div>
  <ul>
      <li>
          <router-link to="/">Home</router-link>
      </li>
      <li>
          <router-link to="/lineChart">선그래프</router-link>
      </li>
      <li>
          <router-link></router-link>
      </li>
  </ul>
  
  </header>
</template>

<script>
export default {

}
</script>

<style>

.container{
    display: flex;
    margin: 25px auto;
    font-size: 0.7rem;
    width: 60%;
    text-align: center;
    background-color: #f5f2e4f1;
    padding: 10px;
    height: 10vw;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border : 3px solid #f5ebc1f1;
   
}

</style>