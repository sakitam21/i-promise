// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
import router from './router'

import axios from 'axios'
axios.defaults.baseURL = process.env.API_ROOT

import ElementUI from 'element-ui'
Vue.use(ElementUI);

import store from './store/store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
