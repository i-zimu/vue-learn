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
    path: '/echarts/example',
    name: 'example',
    component: () => import('../views/echarts/example.vue')
  },
  // {
  //   path: '/project/gansuMap',
  //   name: 'gansuMap',
  //   component: () => import('../views/project/gansuMap.vue')
  // },
  {
    path: '/echarts/chinaMap',
    name: 'chinaMap',
    component: () => import('../views/echarts/chinaMap.vue')
  },
  {
    path: '/jQuery/page1',
    name: 'page1',
    component: () => import('../views/jQuery/page1.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
