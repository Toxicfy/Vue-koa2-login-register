const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const User = require('../dbs/userModels').Users

const URL = require('../dbs/config').URL
const app = new Koa()
const router = new Router()

// 使用ctx.body解析中间件
app.use(bodyParser())
app.use(cors())


router.get('/', async ctx => {
  ctx.body = URL
})

router.post('/api/register', async ctx => {
  const {username, password} = ctx.request.body
  const isRegister = await User.find({ username });
  if (isRegister.length > 0) {
    ctx.body = {
      code: -1,
      msg: '该用户名已被注册'
    }
    return
  }
  const user = await User.create({
    username,
    password
  })
  if (user) {
    ctx.body = {
      message: '用户注册成功',
      code: 0
    }
  } else {
    ctx.body = {
      message: '用户注册失败，请重试',
      code: 0
    }
  }

})


// 使用路由中间件

app.use(router.routes()).use(router.allowedMethods())
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET');
  await next();
});
app.listen(3000, () => {
  console.log('server is running at port 3000')
})
