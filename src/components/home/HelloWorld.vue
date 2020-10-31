<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Data />
    <h2>
      <span>喜欢打王者，只会喷。。。</span>
      <span>。。。喜欢玩吃鸡，只会躺</span>
    </h2>
    <h3>前端代码搬运工</h3>
    <div class="content">
      <div class="part">
        <h3>页面重构</h3>
        <ul>
          <li><router-link to="/jQuery/page1">jQuery</router-link></li>
          |
          <li><router-link to="/view">View UI</router-link></li>
          |
          <li>
            <router-link to="/JavaScript/index">JavaScript原生练习</router-link>
          </li>
          |
          <li><router-link to="/Vue/index">Vue.js</router-link></li>
        </ul>
      </div>
      <div class="part">
        <h3>页面布局</h3>
        <ul>
          <li><router-link to="/">Flex布局</router-link></li>
          |
          <li><router-link to="/">Grid布局</router-link></li>
          |
          <li><router-link to="/">Float布局</router-link></li>
        </ul>
      </div>
      <div class="part">
        <h3>Echarts 实例</h3>
        <ul>
          <li><router-link to="/example">入门示例</router-link></li>
          |
          <li><router-link to="/gansuMap">甘肃地图</router-link></li>
          |
          <li><router-link to="/chinaMap">中国地图</router-link></li>
        </ul>
      </div>
      <div class="part">
        <h3>大屏展示</h3>
        <ul>
          <li><router-link to="/largeScreenIndex">凉州区党建</router-link></li>
          |
          <li><router-link to="/echarts/gansuMap">甘肃地图</router-link></li>
          |
          <li><router-link to="/echarts/chinaMap">中国地图</router-link></li>
        </ul>
      </div>
      <div class="part">
        <h3>大屏展示</h3>
        <ul>
          <li><router-link to="/largeScreenIndex">凉州区党建</router-link></li>
          |
          <li><router-link to="/echarts/gansuMap">甘肃地图</router-link></li>
          |
          <li><router-link to="/echarts/chinaMap">中国地图</router-link></li>
        </ul>
      </div>
      <div class="part">
        <h3>大屏展示</h3>
        <ul>
          <li><router-link to="/largeScreenIndex">凉州区党建</router-link></li>
          |
          <li><router-link to="/echarts/gansuMap">甘肃地图</router-link></li>
          |
          <li><router-link to="/echarts/chinaMap">中国地图</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Data from "../Data"
export default {
  name: "HelloWorld",
  components:{
      Data
  },
  props: {
    msg: String,
  },
  data() {
    return {
    };
  },
}
</script>

<style scoped lang="less">
.hello {
  width: 100%;
  height: 100vh;
  text-align: center;
  color: #999;
}
h1 {
  padding: 40px 0 0;
  font-size: 42px;
}
h2 {
  padding: 40px 0 0;
  font-size: 20px;
  span {
    display: block;
    margin: 20px auto;
  }
}
h3 {
  padding: 40px 0;
//   color: #97c8fa;
  font-size: 30px;
}
ul {
  list-style-type: none;
  padding: 0;
  margin-top: 30px;
}
li {
  display: inline-block;
  margin: 0 20px;
  font-size: 18px;
}
a {
  margin: 0 10px;
  color: rgb(255, 255, 255);
  text-decoration: none;
}
.content {
  display: flex;
  // justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  .part {
    width: 30%;
    height: 220px;
    margin: 40px auto;
    border: 1px solid #ccc;
    border-radius: 10px;
  }
}
</style>
