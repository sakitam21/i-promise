import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/Main'

import Default from '@/components/Default'

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
      	}
      ]
    }
  ]
})
