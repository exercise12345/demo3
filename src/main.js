import Vue from 'vue'
import App from './App.vue'
import router from './router'
import less from 'less'
import store from './store'

Vue.use(less)
Vue.config.productionTip = false

new Vue({
  router, // 使用vue-router
  store, // 使用Vuex
  render: h => h(App)
}).$mount('#app')
