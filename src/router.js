import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/user/Login';
import Register from './views/user/Register';
import Manage from './views/user/Manage';

Vue.use(Router);

// 定义routes 配置
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: '登录',
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
];

const router = new Router({
  routes
})

