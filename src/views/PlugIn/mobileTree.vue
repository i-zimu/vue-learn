<template>
  <div class="mobileTree">
    <h1>mobileTree</h1>
    <vs-tree checkOnClickNode showIcon onlyShowLeafIcon showCheckbox highlightCurrent animation :data="data">
    </vs-tree>
  </div>
</template>

<script>
import vsTree from "vs-tree";
export default {
  name: "mobileTree",
  data() {
    return {
      data: {
        id: "1",
        name: "zhangsan",
        children: [
          {
            id: "100",
            name: "wangwu",
            children: [
              { id: "102", name: "huahua" },
              { id: "103", name: "oo-1" },
            ],
          },
          {
            id: "101",
            name: "zhaoliu",
            children: [
              { id: "102", name: "huahua" },
              { id: "103", name: "oo-1" },
            ],
          },
          { id: "102", name: "huahua" },
          { id: "103", name: "oo-1" },
        ],
      },
    };
  },
};
</script>

<style lang="less" scoped>
.mobileTree {
}
</style>
