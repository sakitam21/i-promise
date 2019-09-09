import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/Main'
import Login from '@/components/account/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main
    },
    {
   	  path: '/login',
   	  name: 'login',
   	  component: Login
    }
  ]
})
