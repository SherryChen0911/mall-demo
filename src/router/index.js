import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index/Index.vue'
import Category from '../views/category/Category.vue'
import Shopcart from '../views/shopcart/Shopcart.vue'
import Profile from '../views/profile/Profile.vue'
import Detail from '../views/detail/Detail.vue'
import Preorder from '../views/order/Preorder.vue'
import OrderList from '../views/order/OrderList.vue'
import OrderDetail from '../views/order/OrderDetail.vue'
import AddressList from '../views/address/AddressList.vue'
import AddressDetail from '../views/address/AddressDetail.vue'
import AddressAdd from '../views/address/AddressAdd.vue'
import Login from '../views/login/Login.vue'

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
    path: '/preorder',
    name: 'Preorder',
    component: Preorder,
    meta:{
      showTab: false,
    }
  },
  {
    path: '/orderlist',
    name: 'OrderList',
    component: OrderList,
    meta:{
      showTab: false,
    }
  },
  {
    path: '/orderdetail',
    name: 'OrderDetail',
    component: OrderDetail,
    meta:{
      showTab: false,
    }
  },
  {
    path: '/addresslist',
    name: 'AddressList',
    component: AddressList,
    meta:{
      showTab: false,
    }
  },
  {
    path: '/addressdetail',
    name: 'AddressDetail',
    component: AddressDetail,
    meta:{
      showTab: false,
    }
  },
  {
    path: '/addressadd',
    name: 'AddressAdd',
    component: AddressAdd,
    meta:{
      showTab: false,
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{
      showTab: false,
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
