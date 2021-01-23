<template>
  <div class="vant">
    <van-checkbox-group v-model="result">
      <van-checkbox name="a">
        <van-collapse v-model="activeNames">
          <van-collapse-item title="vant折叠面板" name="1">
              <h1>复选框1</h1>
              <h1>复选框2</h1>
              <h1>复选框3</h1>
              <h1>复选框4</h1>
          </van-collapse-item>
        </van-collapse>
      </van-checkbox>
      <van-checkbox name="b">复选框 b</van-checkbox>
    </van-checkbox-group>
  </div>
</template>

<script>
export default {
  name: "vant",
  data() {
    return {
      result: [],
      activeNames: ["0"],
    };
  },
};
</script>

<style lang="less" scoped>
.vant {
  width: 375px;
  height: 812px;
  margin: 40px auto;
  padding: 0 10px;
  border: 1px solid #cccccc;
  .van-checkbox-group {
    width: 100%;
  }
  /deep/.van-checkbox__label{
      width: 100%;
      text-align: left;
  }
}
</style>