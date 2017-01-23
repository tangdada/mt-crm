import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Transition from '../views/demoView/transition/Transition'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/transition',
      component: Transition
    }
  ]
})
