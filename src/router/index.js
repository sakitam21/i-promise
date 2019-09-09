import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/Main'
import Login from '@/components/account/Login'

import MenuList from '@/components/group/MenuList'

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
    },
    {
      path: '/menulist/:listid',
      name: 'menulist',
      component: MenuList    
  	},
  ]
})
