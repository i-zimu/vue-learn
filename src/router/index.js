import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    //首页
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    //viewUi
    {
        path: '/view',
        name: 'View',
        component: () => import('../views/View.vue')
    },
    //js
    {
        path: '/javaScript',
        name: 'JavaScript',
        component: () => import('../views/JavaScript/index.vue')
    },
    {
        path: '/JavaScript/page1',
        name: 'JavaScript',
        component: () => import('../views/JavaScript/page1.vue')
    },
    {
        path: '/JavaScript/page2',
        name: 'JavaScript',
        component: () => import('../views/JavaScript/page2.vue')
    },
    {
        path: '/example',
        name: 'example',
        component: () => import('../views/echarts/example.vue')
    },
    {
        path: '/gansuMap',
        name: 'gansuMap',
        component: () => import('../views/echarts/gansuMap.vue')
    },
    {
        path: '/chinaMap',
        name: 'chinaMap',
        component: () => import('../views/echarts/chinaMap.vue')
    },
    {
        path: '/jQuery/page1',
        name: 'page1',
        component: () => import('../views/jQuery/page1.vue')
    },
    // vue.js首页
    {
        path: '/Vue/index',
        name: 'index',
        component: () => import('../views/Vue/index.vue')
    },
    // vue返回
    {
        path: '/Vue/vueBack',
        name: 'vueBack',
        component: () => import('../components/vueBack')
    },
    // vue表单绑定修饰符
    {
        path: '/Vue/page1',
        name: 'page1',
        component: () => import('../views/Vue/page1.vue')
    },
    // vue-router
    {
        path: '/Vue/page2',
        name: 'page2',
        component: () => import('../views/Vue/page2.vue')
    },
    // VueX
    {
        path: '/Vue/page3',
        name: 'page3',
        component: () => import('../views/Vue/page3.vue')
    },
    // vue--
    {
        path: '/Vue/page4',
        name: 'page4',
        component: () => import('../views/Vue/page4.vue')
    },
    // baiduMap
    {
        path: '/Vue/page5',
        name: 'page5',
        component: () => import('../views/Vue/page5.vue')
    },
    // baiduMap
    {
        path: '/page6',
        name: 'page6',
        component: () => import('../views/Vue/page6.vue')
    },
    // 二维码
    {
        path: '/Vue/page7',
        name: 'page7',
        component: () => import('../views/Vue/page7.vue')
    },

    // 大屏展示
    {
        path: '/largeScreenIndex',
        name: 'largeScreen',
        component: () => import('../views/largeScreen/largeScreenIndex.vue')
    },
    //页面公共头部
    {
        path: '/PublicHeader',
        name: 'PublicHeader',
        component: () => import('../views/largeScreen/components/PublicHeader.vue')
    },
    // 大屏展示page1
    {
        path: '/page1',
        name: 'page1',
        component: () => import('../views/largeScreen/page1.vue')
    },
    // 大屏展示page2
    {
        path: '/page2',
        name: 'page2',
        component: () => import('../views/largeScreen/page2.vue')
    },
    // 大屏展示page3
    {
        path: '/page3',
        name: 'page3',
        component: () => import('../views/largeScreen/page3.vue')
    },
    // 大屏展示page4
    {
        path: '/page4',
        name: 'page4',
        component: () => import('../views/largeScreen/page4.vue')
    },
    // 图片放大缩小插件
    {
        path: '/PicAddSub',
        name: 'PicAddSub',
        component: () => import('../views/PlugIn/pictureAddSub.vue')
    },
    // 按需引入ElementUi
    {
        path: '/elementUi',
        name: 'elementUi',
        component: () => import('../views/PlugIn/elementUi.vue')
    },
    // VantUi
    {
        path: '/vantUi',
        name: 'vantUi',
        component: () => import('../views/PlugIn/vantUi.vue')
    },
    // mobile-tree
    {
        path: '/mobileTree',
        name: 'mobileTree',
        component: () => import('../views/PlugIn/mobileTree.vue')
    },
    // audio
    {
        path: '/audio',
        name: 'audio',
        component: () => import('../views/PlugIn/audio.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
