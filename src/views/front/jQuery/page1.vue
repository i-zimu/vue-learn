<template>
  <div class="total">
    <div @click="Change()"></div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  methods: {
    Change() {
      $("div").toggleClass("div");
      // console.dir($("div"));
    },
  },
};
</script>

<style lang="less" scoped>
.total {
  div {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 848px;
    height: 600px;
    margin: 0 auto;
    // background: url(../../assets/img/bg/bg-home.jpg) no-repeat center/contain;
  }
  .div {
    // background: url(../../assets/img/bg/bg.jpg) no-repeat center/contain;
  }
}
</style>