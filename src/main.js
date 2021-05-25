import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import store from './store'
import router from './router'
import './plugins/element.js'
import './mock'
import './utils/permission'

Vue.config.productionTip = false

// 123123123
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app')
