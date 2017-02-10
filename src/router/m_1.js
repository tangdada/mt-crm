import Main from '../views/m_1/Index'
import HospitalManage from '../views/m_1/hospitalmanage/HospitalManage'

export default [{
  path: '/main',
  component: Main,
  // 定义子路由
  children: [{
    path: 'hospitalmanage',
    component: HospitalManage
  }]
}]
