import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/components'
import './components/vant/index'
import './assets/style/index.less'
// markdown编辑器
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.config.productionTip = false
Vue.use(mavonEditor)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
