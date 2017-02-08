import Main from '../views/m_1/Index'
import HospitalManage from '../views/m_1/hospitalmanage/HospitalManage'

module.exports = [{
  path: '/main',
  component: Main,
  // 定义子路由
  children: [{
    path: 'hospitalmanage',
    component: HospitalManage
  }]
}]
