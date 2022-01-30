// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import * as echarts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css'
import ace from 'ace-builds'
import componentsInstall from './components/install'
import {codemirror} from 'vue-codemirror'

var axios = require('axios')
axios.defaults.baseURL = "http://localhost:8443/api"
Vue.prototype.bus = new Vue()
Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(ace)
Vue.use(componentsInstall)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h =>h(App),
  router,
  store,
  components: { App, codemirror},
  template: '<App/>'
})
