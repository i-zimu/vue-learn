import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import normalize from './assets/css/normalize.css'

// iview 组件引入
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import './common/commonCss.less';

//引入echart的全部组件
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

// Vue.use(VueRouter);
Vue.use(ViewUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
