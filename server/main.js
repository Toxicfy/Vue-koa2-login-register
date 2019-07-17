const Koa = require('koa')
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
const userRouter = require('./interface/user').router

const app = new Koa()
app.use((ctx, next) => {
  return next().catch(err => {
    if (err.status === 401) {
      ctx.body = {
        message: '凭证无效，请重新登录',
        code: -1,
        status: 401
      }
    }
  })
})

app.use(bodyParser()) // 使用ctx.body解析中间件
app.use(cors()) // 使用cor()实现跨域
app.use(userRouter.routes()).use(userRouter.allowedMethods()) // 使用user路由

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET')
  await next()
})
app.listen(3000, () => {
  console.log('server is running at port 3000')
})
