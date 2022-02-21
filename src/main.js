// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import * as echarts from 'echarts'
import 'echarts-wordcloud'
import ecStat from 'echarts-stat';
import 'element-ui/lib/theme-chalk/index.css'
import ace from 'ace-builds'
import jq from 'jquery'
import componentsInstall from './components/install'
import vueXlsxTable from 'vue-xlsx-table'
import {codemirror} from 'vue-codemirror'

var axios = require('axios')
axios.defaults.baseURL = "http://localhost:8443/api"
Vue.prototype.bus = new Vue()
window.$ = jq
Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts
require('echarts-wordcloud')
Vue.prototype.$ecStat = ecStat
Vue.config.productionTip = false
Vue.use(vueXlsxTable,{rABS:false})

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
