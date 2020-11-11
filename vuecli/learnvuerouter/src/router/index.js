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
        path: '',
        redirect: 'msgs'
      },
      {
        path: 'msgs',
        component: HomeMsgs
      },
      {
        path: 'news',
        component: HomeNews
      }
    ],
    meta: {
      title: 'home'
    }
  },
  {
    path: '/about',
    name: '关于',
    component: About,
    meta: {
      title: '关于'
    },
    beforeEnter: (to, from, next) => {
      console.log('关于的钩子');
      next()
    }
  },
  {
    path: '/user/:userId',
    name: '用户',
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// router.beforeEach(function (to,from,next) {

// })

//前置守卫(guard)，需要调用next()函数
router.beforeEach((to, from, next) => {
  // document.title = to.title
  document.title = to.matched[0].meta.title
  console.log(to.matched[0].meta.title);
  next()
})
//后置钩子(hook)，不需要调用next()
router.afterEach((to, from) => {

})

export default router