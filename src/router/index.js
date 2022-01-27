import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AppIndex from '@/components/home/AppIndex'
import Login from '@/components/Login'
import Home from '@/components/Home'
import PreviewIndex from '@/components/preview/PreviewIndex'
import DataIndex from '@/components/data/DataIndex'
import UserIndex from '@/components/user/UserIndex'
import Chart from '@/components/chart/Chart'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
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
          path: '/index',
          name: '/AppIndex',
          component: AppIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/chart',
          name: '/Chart',
          component: Chart,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/preview',
          name: '/Preview',
          component: PreviewIndex,
          meta: {
            requireAuth: true
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
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
