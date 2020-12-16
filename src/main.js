import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import normalize from './assets/css/normalize.css'

// iview 组件引入
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import './common/commonCss.less';
import "../src/assets/css/base.less";
import "../src/assets/css/largeScreen.less";

//引入vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

import VueFullpage from 'vue-fullpage.js';
Vue.use(VueFullpage);

//引入echart的全部组件
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

// Vue.use(VueRouter);
Vue.use(ViewUI);

//全局引入baiduMap
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {ak: 'xVjR2UP65RYW4hGTcrXYEMwBuG5T5B4O'})

Vue.config.productionTip = false

//按需引入elementUi
import { Button, Select } from 'element-ui';

Vue.use(Button)
Vue.use(Select)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')