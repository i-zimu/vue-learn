<template>
  <div class="backHome">
      <i><router-link to="/"><img src="../assets/vueBack.png" alt="" srcset=""></router-link></i>
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {

    }
  }
 }
</script>

<style lang="less" scoped>
.backHome{
  position: absolute;
  top: 20px;
  left: 20px;
  & img{
    width: 25px;
    height: 25px;
  }
}
</style>