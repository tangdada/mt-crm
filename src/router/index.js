import Vue from 'vue'
import Router from 'vue-router'

const m_public =  require('./m_public')  //公用模块
const m_1 =  require('./m_1')  //${m_1}模块

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: m_public.concat(m_1)
})
