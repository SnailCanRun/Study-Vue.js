import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import User from '../components/User.vue'

const Profile = () => import('../components/Profile.vue')//路由懒加载
const HomeMsgs = () => import('../components/HomeMsgs.vue')
const HomeNews = () => import('../components/HomeNews.vue')

Vue.use(VueRouter)
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'msgs',
        component: HomeMsgs
      },
      {
        path: 'news',
        component: HomeNews
      }
    ]
  },
  {
    path: '/about',
    name: '关于',
    component: About
  },
  {
    path: '/user/:userId',
    name: '用户',
    component: User
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router