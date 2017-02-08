import Home from '../views/m_public/home/Home'
import Login from '../views/m_public/login/Login'
import Transition from '../views/m_public/demoView/transition/Transition'

module.exports = [
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
