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
    /* 前端基础 front */
    //javaScript
    {
        path: '/javaScript',
        name: 'JavaScript',
        component: () => import('../views/front/javaScript/index.vue')
    },
    //jquery
    {
        path: '/jQuery/page1',
        name: 'page1',
        component: () => import('../views/front/jQuery/page1.vue')
    },
    // vue
    {
        path: '/Vue/index',
        name: 'index',
        component: () => import('../views/front/vue/index.vue')
    },

    /* 页面布局 */
    // flex
    {
        path: '/flex',
        name: 'Flex',
        component: () => import('../views/pageLayout/flex.vue')
    },
    // grid
    {
        path: '/grid',
        name: 'Grid',
        component: () => import('../views/pageLayout/grid.vue')
    },
    // float
    {
        path: '/float',
        name: 'Float',
        component: () => import('../views/pageLayout/float.vue')
    },

    /* ui组件 */
    //view
    {
        path: '/view',
        name: 'View',
        component: () => import('../views/uiLib/view.vue')
    },
    // elementUi
    {
        path: '/element',
        name: 'Element',
        component: () => import('../views/uiLib/elementUi.vue')
    },
    // vant
    {
        path: '/vant',
        name: 'Vant',
        component: () => import('../views/uiLib/vantUi.vue')
    },
    // antDesign
    {
      path: '/antDesign',
      name: 'AntDesign',
      component: () => import('../views/uiLib/antDesign.vue')
  },

    /* eCharts图表 */

    {
        path: '/example',
        name: 'Example',
        component: () => import('../views/echarts/example.vue')
    },
    {
        path: '/gansuMap',
        name: 'GansuMap',
        component: () => import('../views/echarts/gansuMap.vue')
    },
    {
        path: '/chinaMap',
        name: 'ChinaMap',
        component: () => import('../views/echarts/chinaMap.vue')
    },



    /* PC插件 */

    // 大屏展示
    {
        path: '/largeScreen',
        name: 'LargeScreen',
        component: () => import('../views/pcPlugin/largeScreen/largeScreenIndex.vue')
    },
    // 水印
    {
      path: '/watermark',
      name: 'Watermark',
      component: () => import('../views/pcPlugin/watermark/index.vue')
  },
    //页面公共头部
    {
        path: '/PublicHeader',
        name: 'PublicHeader',
        component: () => import('../views/pcPlugin/largeScreen/components/PublicHeader.vue')
    },
    // 大屏展示page1
    {
        path: '/page1',
        name: 'page1',
        component: () => import('../views/pcPlugin/largeScreen/page1.vue')
    },
    // 大屏展示page2
    {
        path: '/page2',
        name: 'page2',
        component: () => import('../views/pcPlugin/largeScreen/page2.vue')
    },
    // 大屏展示page3
    {
        path: '/page3',
        name: 'page3',
        component: () => import('../views/pcPlugin/largeScreen/page3.vue')
    },
    // 大屏展示page4
    {
        path: '/page4',
        name: 'page4',
        component: () => import('../views/pcPlugin/largeScreen/page4.vue')
    },


    // 图片放大缩小插件
    {
        path: '/picAddSub',
        name: 'PicAddSub',
        component: () => import('../views/pcPlugin/pictureAddSub.vue')
    },

    // 二维码
    {
        path: '/qrCode',
        name: 'QrCode',
        component: () => import('../views/pcPlugin/qrCode.vue')
    },

    // baiduMap
    {
        path: '/baiduMap',
        name: 'BaiduMap',
        component: () => import('../views/pcPlugin/baiduMap.vue')
    },
    // baiduMap
    {
        path: '/bdMap',
        name: 'bdMap',
        component: () => import('../views/pcPlugin/bdMap.vue')
    },

    /* 移动端插件 */
    // mobile-tree
    {
        path: '/mobileTree',
        name: 'MobileTree',
        component: () => import('../views/mobilePlugin/mobileTree.vue')
    },

    //视频插件
    // video
    {
        path: '/video',
        name: 'Video',
        component: () => import('../views/mobilePlugin/video.vue')
    },
    //语音插件
    // audio
    {
        path: '/audio',
        name: 'Audio',
        component: () => import('../views/mobilePlugin/audio.vue')
    },
    //钉钉语音
    // ddAudio
    {
        path: '/ddAudio',
        name: 'DdAudio',
        component: () => import('../views/mobilePlugin/ddAudio.vue')
    },
    //原生语音
    // addMedia
    {
        path: '/addMedia',
        name: 'AddMedia',
        component: () => import('../views/mobilePlugin/addMedia.vue')
    },
    //jsAudio
    {
        path: '/jsAudio',
        name: 'JsAudio',
        component: () => import('../views/mobilePlugin/jsAudio.vue')
    },
    //Tree -iview
    {
        path: '/iTree',
        name: 'ITree',
        component: () => import('../views/pcPlugin/iTree.vue')
    },
    /* ---------------------------------------------------------------------------------------、 */
    // vue返回
    // {
    //     path: '/Vue/vueBack',
    //     name: 'vueBack',
    //     component: () => import('../components/vueBack')
    // },
    // vue表单绑定修饰符
    // {
    //     path: '/Vue/page1',
    //     name: 'page1',
    //     component: () => import('../views/Vue/page1.vue')
    // },
    // // vue-router
    // {
    //     path: '/Vue/page2',
    //     name: 'page2',
    //     component: () => import('../views/Vue/page2.vue')
    // },
    // // VueX
    // {
    //     path: '/Vue/page3',
    //     name: 'page3',
    //     component: () => import('../views/Vue/page3.vue')
    // },
    // // vue--
    // {
    //     path: '/Vue/page4',
    //     name: 'page4',
    //     component: () => import('../views/Vue/page4.vue')
    // },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
