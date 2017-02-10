import Vue from 'vue'
import Router from 'vue-router'

import * as m_1 from './m_1'
import * as m_public from './m_public'

Vue.use(Router)

console.log(m_1)
console.log(m_public)

export default new Router({
  mode: 'hash',
  routes: [
    ...m_1.default, ...m_public.default
  ]
})
