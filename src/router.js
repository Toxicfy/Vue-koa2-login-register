import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/user/Login'
import Register from './views/user/Register'
import Manage from './views/user/Manage'
import store from './store'

Vue.use(Router)

// 定义routes 配置
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/manage',
    name: 'manage',
    component: Manage,
    meta: {
      title: '管理',
      requireAuth: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      title: '注册'
    }
  }
]

const router = new Router({
  routes
})

if (localStorage.getItem('token')) {
  //页面进行刷新，重新赋值 store.user.token
  store.commit({
    type: 'SET_TOKEN',
    token: localStorage.getItem('token')
  })
}

// 页面跳转权限控制
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    // 页面需要登录权限
    if (store.getters.token) {
      next()
    } else {
      Vue.prototype.$message({
        type: 'warning',
        message: '认证过期，需要重新登录'
      })
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})

export default router
