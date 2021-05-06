import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// iview 组件引入
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

import './common/commonCss.less';
import "../src/assets/css/base.less";
import "../src/assets/css/largeScreen.less";
import "../src/assets/css/clearDefault.css"

//引入vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import VueFullpage from 'vue-fullpage.js';
Vue.use(VueFullpage);

//引入echart的全部组件
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.use(ViewUI);

//全局引入baiduMap
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, { ak: 'xVjR2UP65RYW4hGTcrXYEMwBuG5T5B4O' })

Vue.config.productionTip = false

//按需引入elementUi
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Select, DatePicker, Cascader } from 'element-ui';

Vue.use(Button);
Vue.use(Select);
Vue.use(DatePicker);
Vue.use(Cascader);

//引入antd
// import { Button } from 'ant-design-vue';
// Vue.use(Button);
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'


import Vant from 'vant';
import 'vant/lib/index.css';
import { Toast } from 'vant';
Vue.use(Toast);
Vue.use(Vant);

import { install } from 'vs-tree'
import 'vs-tree/dist/vs-tree.css'
Vue.use(install)

import Vconsole from 'vconsole';
let vConsole = new Vconsole();
export default vConsole
//语音
import Recorder from 'js-audio-recorder';
let recorder = new Recorder();

import CryptoJS from 'crypto-js';
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')