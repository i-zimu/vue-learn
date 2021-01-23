<template>
  <div class="largeScreen-wrap">
    <full-page :options="options" ref='fullpage'>
      <div class="section" id="section1" ref="largeScreen">
        <div class="page">
          <page1 />
        </div>
      </div>
      <div class="section" id="section2">
        <div class="page">
          <page2 />
        </div>
      </div>
      <div class="section" id="section3">
        <div class="page">
          <page3 />
        </div>
      </div>
      <div class="section" id="section4">
        <div class="page">
          <page4 />
        </div>
      </div>
    </full-page>
  </div>
</template>

<script>
import page1 from "./page1";
import page2 from "./page2";
import page3 from "./page3";
import page4 from "./page4";
export default {
  components: { page1, page2, page3, page4 },
  data() {
    return {
      options: {
        scrollBar: false, //滚动条是否显示
        navigation: true, //导航栏显示（圆形小点）
      },
    };
  },
};
</script>
<style lang='less' scoped>
</style>
<style lang="less">
.page {
  position: relative;
  height: 100%;
}
#fp-nav {
  position: fixed;
  top: 50%;
  right: 0;
  z-index: 999;
  li {
    margin: 1rem .5rem;
    a {
      display: block;
      font-size: 0;
      height: 0.5rem;
      width: 0.5rem;
      border-radius: 0.25rem;
      background: rgba(123, 224, 252, 0.8);
    }
    a.active {
      height: 0.5rem;
      width: 0.5rem;
      border-radius: 0.25rem;
      box-shadow: 0 0 1rem rgb(250, 208, 28);
      background: rgb(250, 208, 28);
    }
  }
}
</style>