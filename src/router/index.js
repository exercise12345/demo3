import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import MSite from '../views/MSite/MSite.vue'
import Order from '@/views/Order/Order.vue'
import Profile from '@/views/Profile/Profile.vue'
import Search from '@/views/Search/Search.vue'
import Login from '@/views/Login/Login.vue'

Vue.use(VueRouter)

const routes = [
  // 设置默认显示路由
  {
    path: '/',
    redirect: '/mSite'
  },
  {
    path: '/mSite',
    component: MSite,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/order',
    component: Order,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/login',
    component: Login
  }

]

const router = new VueRouter({
  routes
})

export default router
