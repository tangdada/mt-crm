import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import Transition from '../views/demoView/transition/Transition'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/transition',
      component: Transition
    }
  ]
})
