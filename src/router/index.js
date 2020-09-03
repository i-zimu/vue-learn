import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/view',
    name: 'View',
    component: () => import('../views/View.vue')
  },
  {
    path: '/JavaScript/index',
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
    path: '//example',
    name: 'example',
    component: () => import('../views/echarts/example.vue')
  },
  // {
  //   path: '/project/gansuMap',
  //   name: 'gansuMap',
  //   component: () => import('../views/project/gansuMap.vue')
  // },
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
