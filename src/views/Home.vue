<template>
  <div class="home-wrap">
    <div class="home">
      <!-- header -->
      <div class="header">
        <ul>
          <li @click="choic('1')">首页</li>
          <li @click="choic('2')">服务</li>
          <li @click="choic('3')">关于</li>
          <li @click="choic('4')">联系</li>
          <li @click="changeRouter">changeRouter</li>
        </ul>
      </div>
      <div class="main">
        <Swiper />
      </div>
      <HelloWorld />
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/home/HelloWorld.vue";
import Swiper from "@/components/Swiper.vue";
import router from "../router/index"
export default {
  name: "Home",
  components: {
    Swiper,
    HelloWorld,
  },
  data() {
    return {};
  },
  methods: {
    choic(n) {
      console.log("1", n);
    },
    changeRouter() {
      console.log('--router', router, router.options.routes)
      router.matcher.addRoutes([{
        name: 'Element',
        path: '/element',
        component: Element
      }])
      console.log('--router', router.options.routes)
    }
  },
};
</script>
<style scoped lang="less">
.home-wrap {
  .home {
    .header {
        color: #fff;
        background: #0a0e1b;
      ul {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        height: 55px;
        li {
          width: 100px;
          line-height: 55px;
          text-align: center;
          cursor: pointer;
        }
      }
    }
  }
}
</style>

