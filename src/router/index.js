import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Home from '@/components/Home'
import PreviewIndex from '@/components/preview/PreviewIndex'
import DataIndex from '@/components/data/DataIndex'
import UserIndex from '@/components/user/UserIndex'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/preview',
      children: [
        {
          path: '/preview',
          name: '/Preview',
          component: PreviewIndex,
          meta: {
            requireAuth: true,
          }
        },
        {
          path: '/data',
          name: '/Data',
          component: DataIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/user',
          name: '/User',
          component: UserIndex,
          meta: {
            requireAuth: true
          }
        }
      ]
    },
    {
      path: '/',
      name: 'Login',
      redirect: '/login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
