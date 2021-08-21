import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index/Index.vue'
import Category from '../views/category/Category.vue'
import Shopcart from '../views/shopcart/Shopcart.vue'
import Profile from '../views/profile/Profile.vue'
import Detail from '../views/detail/Detail.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta:{
      showTab: true,
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
    meta:{
      showTab: true,
    }
  },
  {
    path: '/shopcart',
    name: 'Shopcart',
    component: Shopcart,
    meta:{
      showTab: true,
    }
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
    meta:{
      showTab: false,
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta:{
      showTab: true,
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
