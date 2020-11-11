import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home.vue')
const Category = () => import('../views/Category.vue')
const Cart = () => import('../views/Cart.vue')
const Profile = () => import('../views/Profile.vue')

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
