<template>
  <div class="home-wrap">
    <div class="home">
      <HelloWorld />
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/home/HelloWorld.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {};
  },
};
</script>
<style scoped lang="less">
.home-wrap {
  .home {
    color: #2a363b;
  }
}
</style>

