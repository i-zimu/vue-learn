<template>
  <div class="vueBack">
    <i><router-link to="/vue/index">
      <img src="../assets/vuejs.png" title="vueBack">
    </router-link></i>
  </div>
</template>

<script>
export default {
  name: 'vueBack',
  data() { 
    return {

    }
  }
 }
</script>

<style lang="less" scoped>
  .vueBack{
    width: 80%;
    height: 10vh;
    margin: 40px auto 0;
    // background: #fff;
    img{
      width: 45px;
      height: 45px;
    }

  }
</style>