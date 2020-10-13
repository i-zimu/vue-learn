import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 全屏变量，标识当前是否为全屏状态
    fullscreen: false,
    element: document.documentElement
  },
  mutations: {
    // 改变全屏状态变量
    changeFullscreenVar(state) {
      state.fullscreen = !state.fullscreen
    },
    // 进入全屏
    lanchFullscreen(state) {
      var element = state.element
      if(element.requestFullscreen) {
        element.requestFullscreen()
      } else if(element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
      } else if(element.msRequestFullscreen) {
        element.msRequestFullscreen()
      } else if(element.webkitRequestFullscreen) {
        element.webkitRequestFullScreen()
      }
    },
    // 退出全屏
    exitFullscreen(state) {
      if(document.exitFullscreen) {
        document.exitFullscreen()
      } else if(document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if(document.msExitFullscreen) {
        document.msExiFullscreen()
      } else if(document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      }
    },
    // 暴露给外界的处理方法，调用这个方法，自行判断是要全屏还是退出全屏
    handleFullScreen(state) {
      // 注意：要在用户授权全屏后才能获取全屏的元素，否则 fullscreenEle为null
      var fullscreenEle = fullscreenEle = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
      console.log(fullscreenEle, '全屏元素...')
      if(fullscreenEle) {
        console.log('exitFullscreen..')
        this.commit('exitFullscreen')
      } else {
        console.log('lanchFullscreen..')
        this.commit('lanchFullscreen')
      }
    }
  },
  actions: {},
  modules: {}
})