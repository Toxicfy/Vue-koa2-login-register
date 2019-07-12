import axios from "axios";
import store from './store';
import * as type from './store/constant';
import router from './router'

axios.defaults.baseURL = 'http://localhost:3000/'
axios.defaults.headers['Content-Type'] = 'application/json'

// 添加请求拦截器
axios.interceptors.request.use(
    config => {
        // 如果存在token的话，则每个http header都加上
        if (localStorage.getItem('token')) {
            config.headers.Authorization = `token ${store.getters.token}`
        }
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

axios.interceptors.response.use(
    response => response,
    err => {
        if (err.response) {
            switch (err.response.status) {
                case 401:
                    store.commit(type.REMOVE_TOKEN);
                    const currentRouter = router.currentRoute.path;
                    currentRouter !== 'login' && router.push({
                        path: 'login'
                    })
                    break;
            
                default:
                    break;
            }
          return new Promise.reject(err.response.data)
        }
    }
)

export default axios;