> 🤣🤣基于 Vue + Koa2 + MongoDB 实现登录注册

## 技术栈

- 前端： 基于 `vue-cli3` 的 `Vue` 全家桶，`Element-ui`
- 后端： 基于 `Koa2`/`Koa-router` 等的 `Node.js`
- HTTP: `axios` 数据请求，`jsonwebtoken`进行 `token` 签发验证

## 项目结构

```
.
├── public
├── server  // 服务端部分
│   ├── dbs // 定义数据模型
│   │   ├── config.js
│   │   └── userModels.js
│   ├── interface    // 接口
│   │   └── user.js
│   ├── main.js      // koa2入口文件
│   └── token        // 关于token创建和验证
│       ├── createToken.js
│       ├── key.js
│       └── validateToken.js
├── src  // 前端部分
│   ├── App.vue
│   ├── assets
│   ├── components // 页面组件
│   ├── element-variables.scss
│   ├── http.js // axios封装http 拦截器及默认配置
│   ├── main.js // 入口文件
│   ├── plugins
│   │   └── element.js
│   ├── router.js //vue-router
│   ├── store
│   │   ├── constant.js //mutation 类型
│   │   └── user.js     //vuex user 模块
│   ├── store.js   //vuex store
│   ├── getter.js  //vuex getter
│   └── views
└── vue.config.js  //vue-cli3 配置文件
```



## 运行及构建

``` javascript
// Project setup
npm install

// Compiles and hot-reloads for development
npm run serve  

// Compiles and minifies for production
npm run build 
```

