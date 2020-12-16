<template>
  <div class="largeScreen-wrap">
    <div class="container">
      <PublicHeader />
      <div class="main">
        <div class="part">
          <div class="item"></div>
          <div class="item"></div>
        </div>
        <div class="part-main">
          <div class="item-main">
            <echart/>
          </div>
        </div>
        <div class="part">
          <div class="item"></div>
          <div class="item"></div>
        </div>
      </div>
      <div class="footer">
        <ul>
          <li class="box"></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li class="box"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import PublicHeader from "./components/PublicHeader";
import echart from "../../views/echarts/gansuMap"
export default {
  components: {
    PublicHeader,
    echart
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  padding-top: 14vh;
  .main {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 64vh;
    .part {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      .item {
        width: 440px;
        height: 30vh;
        border: 1px solid #ccc;
      }
    }
    .part-main {
      .item-main {
        width: 840px;
        height: 64vh;
        border: 1px solid #ccc;
      }
    }
  }
  .footer {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin-top: 1.8vh;
    ul {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 95%;
      height: 15vh;
      margin: 1.8vh auto 1vh;
      // border: solid 1px #ccc;
    //   background: url();
      list-style: none;
      background: url(../../assets/img/largeScreen/bg-footer-border.png);
      background-size: 100% 100%;

      li {
        width: 260px;
        height: 13vh;
        // border: 1px solid #80dfff;
        background: url(../../assets/img/largeScreen/bg-footer-part.png);
        background-size: 100% 100%;
      }
      .box {
        width: 28px;
        height: 87px;
        cursor: pointer;
      }
      .box:nth-child(1) {
        background: url(../../assets/img/largeScreen/icon-btn-left.png);
        background-size: 100% 100%;
      }
      .box:nth-child(8) {
        background: url(../../assets/img/largeScreen/icon-btn-right.png);
        background-size: 100% 100%;
      }
    }
  }
}
</style>