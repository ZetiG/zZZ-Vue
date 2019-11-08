import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import AppIndex from '@/components/home/AppIndex'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/index',
      name: 'AppIndex',
      component: AppIndex,
      meta: {
        requireAuth: true
      }
    }
  ]
})
