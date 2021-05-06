<template>
  <div class="hello">
    <div class="content">
      <div class="part">
        <h3>前端基础</h3>
        <ul>
          <li>
            <router-link to="/">JavaScript</router-link>
          </li>
          <li>
            <router-link to="/">jQuery</router-link>
          </li>
          <li>
            <router-link to="/">Vue</router-link>
          </li>

        </ul>
      </div>
      <div class="part">
        <h3>页面布局</h3>
        <ul>
          <li>
            <router-link to="/">Flex布局</router-link>
          </li>

          <li>
            <router-link to="/">Grid布局</router-link>
          </li>

          <li>
            <router-link to="/">Float布局</router-link>
          </li>
        </ul>
      </div>
      <div class="part">
        <h3>UI组件</h3>
        <ul>
          <li>
            <router-link to="/">View UI</router-link>
          </li>
          <li>
            <router-link to="/element">ElementUi</router-link>
          </li>

          <li>
            <router-link to="/">VantUi</router-link>
          </li>

          <li>
            <router-link to="/antDesign">AntDesign</router-link>
          </li>
        </ul>
      </div>
      <div class="part">
        <h3>Echarts图表</h3>
        <ul>
          <li>
            <router-link to="/">入门示例</router-link>
          </li>

          <li>
            <router-link to="/">甘肃地图</router-link>
          </li>

          <li>
            <router-link to="/">中国地图</router-link>
          </li>
        </ul>
      </div>
      <div class="part">
        <h3>插件应用</h3>
        <ul>
          <li>
            <router-link to="/">大屏展示</router-link>
          </li>
          <li>
            <router-link to="/iTree">ivew_tree</router-link>
          </li>
          <li>
            <router-link to="/picAddSub">图片预览</router-link>
          </li>

          <li>
            <router-link to="/qrCode">二维码</router-link>
          </li>

          <li>
            <router-link to="/baiduMap">百度地图</router-link>
          </li>

          <li>
            <router-link to="/mobileTree">mobileTree</router-link>
          </li>

          <li>
            <router-link to="/audio">audio</router-link>
          </li>

          <li>
            <router-link to="/ddAudio">钉钉语音</router-link>
          </li>

          <li>
            <router-link to="/addMedia">原生语音</router-link>
          </li>

          <li>
            <router-link to="/jsAudio">jsAudio</router-link>
          </li>

          <li>
            <router-link to="/video">video</router-link>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped lang="less">
.hello {
  width: 100%;
  text-align: center;
  color: #383535;
  overflow: hidden;
  overflow-y: auto;
  background: #171b27;
  .content {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 2rem;

    .part {
      width: 320px;
      height: 500px;
      margin: 20px 1%;
      border-radius: 5px;
      color: #d1ecf2;
      background: #f1eded;
      overflow-y: auto;
      &:nth-child(5n+1){
            background: #232837;
          }
          &:nth-child(5n+2){
            background: #1b1f2b;
          }
          &:nth-child(5n+3){
            background: #0a0e1b;
          }
          &:nth-child(5n+4){
            background: #1b1f2b;
          }
          &:nth-child(5n){
            background: #232837;
          }
      h3 {
        padding: 20px 0;
        font-size: 20px;
        font-weight: 400;
        color: #eeeeee;
      }

      ul {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        li {
          height: 40px;
          line-height: 40px;
          padding: 5px 10px;
          margin: 10px auto;
          a {
            color: #a9a9a9;
          }
          a:hover {
            color: #005e84;
          }
        }
      }
    }
  }
}
</style>
