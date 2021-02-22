<template>
  <div class="example">
    <div class="header">
      <div class="navBar" @click="goHome">
        <i class="icon1"></i>
        <span>返回首页</span>
      </div>
      <div class="title">-----系统</div>
      <div class="navBar" @click="clickTopBtn('handleFullScreen')">
        <i class="icon2"></i>
        <span>{{rightText}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rightText: "全屏模式",
    };
  },
  methods: {
    goHome() {
      this.$router.push({ name: "Home" });
    },
    clickTopBtn() {
        this.$store.commit("handleFullScreen");
        console.log(this.$store.commit("handleFullScreen"))
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 12vh;
//   background: url(../../../assets/img/largeScreen/bg-header.png) center;
  .navBar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 30px;
    margin: 30px 30px 0;
    color: #fff;
    cursor: pointer;
    .icon1 {
      display: inline-block;
      width: 24px;
      height: 24px;
    //   background: url(../../../assets/img/largeScreen/icon-home.png) no-repeat;
    }
    .icon2 {
      display: inline-block;
      width: 24px;
      height: 24px;
    //   background: url(../../../assets/img/largeScreen/icon-enlarge.png)
        // no-repeat;
    }
    span {
      display: inline-block;
      font-size: 20px;
      font-weight: 400;
      margin-left: 10px;
    }
  }
  .title {
    text-align: center;
    height: 41px;
    font-size: 44px;
    font-family: FZZYJW;
    font-weight: normal;
    color: #ffffff;
    line-height: 60px;
    text-shadow: 1px 3px 6px rgba(0, 23, 38, 0.56);
    margin-top: 25px;
  }
}
</style>