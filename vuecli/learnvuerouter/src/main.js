import Vue from 'vue'
import App from './App'
import router from './router'
//会自动去router目录下找index.js文件，全写应该是import router from './router/index'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
