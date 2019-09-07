import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/Main'
import Default from '@/components/Default'

import Login from '@/components/account/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children:[
      	{
      		path: '',
      		name: 'Default',
      		component: Default
      	},
        {
          path: 'login',
          name: 'Login',
          component: Login
        }
      ]
    }
  ]
})
