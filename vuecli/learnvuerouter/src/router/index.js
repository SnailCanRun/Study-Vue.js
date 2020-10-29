//配置路由相关信息

import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import About from '../components/About'

//1.通过Vue.use(插件),安装插件
Vue.use(VueRouter)

//2.创建VueRouter对象

const routes = [
  {
    path: '/home/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/about/',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  routes
})

//3.将router对象传到vue实例中
// 导出给其他地方用
export default router

// export default new VueRouter({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })