<template>
  <div class="example">
    <div class="header">
      <div class="navBar">
        <i class="icon1"></i>
        <span>返回首页</span>
      </div>
      <div class="title">凉山州党建促脱贫抓落实纪实系统</div>
      <div class="navBar" @click="clickTopBtn('handleFullScreen')">
        <i class="icon2"></i>
        <span>放大显示</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // fullscreen: false,
    };
  },
  methods: {
    clickTopBtn() {
      this.$store.commit("handleFullScreen");
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
  justify-content: space-evenly;
  width: 1920px;
  height: 12vh;
  background: url(../../../assets/img/largeScreen/bg-header.png);
  .navBar {
    width: 200px;
    height: 30px;
    line-height: 30px;
    margin-top: 30px;
    cursor: pointer;
    .icon1 {
      display: inline-block;
      width: 30px;
      height: 30px;
      background: url(../../../assets/img/largeScreen/icon-home.png) no-repeat;
      background-position: 0 6px;
    }
    .icon2 {
      display: inline-block;
      width: 30px;
      height: 30px;
      background: url(../../../assets/img/largeScreen/icon-enlarge.png)
        no-repeat;
      background-position: 0 6px;
    }
    span {
      display: inline-block;
      font-size: 24px;
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