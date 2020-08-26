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
    path: '/larScreen/index',
    name: 'LargeScreen',
    component: () => import('../views/larScreen/index.vue')
  },
  {
    path: '/larScreen/page1',
    name: 'LargeScreen',
    component: () => import('../views/larScreen/page1.vue')
  },
  {
    path: '/larScreen/page2',
    name: 'LargeScreen',
    component: () => import('../views/larScreen/page2.vue')
  },
  {
    path: '/project/example',
    name: 'example',
    component: () => import('../views/project/example.vue')
  },
  // {
  //   path: '/project/gansuMap',
  //   name: 'gansuMap',
  //   component: () => import('../views/project/gansuMap.vue')
  // },
  {
    path: '/project/chinaMap',
    name: 'chinaMap',
    component: () => import('../views/project/chinaMap.vue')
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
