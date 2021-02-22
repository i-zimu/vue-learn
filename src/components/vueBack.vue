<template>
  <div class="vueBack">
    <i @click="goBack"> <img src="../assets/vuejs.png" title="vueBack"></i>
  </div>
</template>

<script>
export default {
  name: "vueBack",
  data() {
    return {};
  },
  methods:{
      goBack(){
          this.$router.push({path:'/'})
      }
  }
};
</script>

<style lang="less" scoped>
.vueBack {
  width: 80%;
  height: 10vh;
  margin: 40px auto 0;
  // background: #fff;
  img {
    width: 45px;
    height: 45px;
  }
}
</style>