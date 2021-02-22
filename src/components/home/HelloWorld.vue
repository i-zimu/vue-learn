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
            <router-link to="/">ElementUi</router-link>
          </li>

          <li>
            <router-link to="/">VantUi</router-link>
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
            <router-link to="/">图片预览</router-link>
          </li>

          <li>
            <router-link to="/">二维码</router-link>
          </li>

          <li>
            <router-link to="/">百度地图</router-link>
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
  color: rgb(56, 53, 53);
  overflow: hidden;
  overflow-y: auto;
  .content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 60px;

    .part {
      width: 18%;
      height: 500px;
      margin: 20px 1%;
      border-radius: 5px;
      color: #2a363b;
      background: #f1eded;
      overflow-y: auto;
      h3 {
        padding: 20px 0;
        font-size: 20px;
        font-weight: 400;
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
        }
      }
    }
  }
}
</style>
