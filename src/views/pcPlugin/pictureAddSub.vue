<template>
  <div class="PicAddSub">
    <h1>图片放大缩小插件</h1>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <div id="index" v-if="1>0">
      <img :src="imgURL" style="width:350px;height:200px" />
      <!-- <ul>
        <li v-for="(item, index) in imgArr" :key="index">
          <img :src="item.src" />
        </li>
      </ul>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "PicAddSub",
  data() {
    return {
      imgURL: require("../../assets/img/bg/1.jpg"),
      imgArr: [
        { src: require("../../assets/img/bg/1.jpg") },
        { src: require("../../assets/img/bg/2.jpg") },
        { src: require("../../assets/img/bg/3.jpg") },
        { src: require("../../assets/img/bg/4.jpg") },
        { src: require("../../assets/img/bg/5.jpg") },
        { src: require("../../assets/img/bg/6.png") }
      ]
    };
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
.PicAddSub {
}
li {
  display: inline-block;
  margin-right: 15px;
  margin-bottom: 15px;
  width: 400px;
  height: 200px;
}
li:hover {
  cursor: zoom-in;
}
img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
</style>