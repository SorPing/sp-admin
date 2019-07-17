import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import AntDesign from 'ant-design-vue'
import 'ant-design-vue/dist/antd.min.css'

Vue.use(AntDesign)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
