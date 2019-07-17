const Router = require('koa-router')
const User = require('../dbs/userModels').Users
const createToken = require('../token/createToken')
const validateToken = require('../token/validateToken')
const router = new Router()

// 测试 token 验证
router.get('/api/test', validateToken, async ctx => {
  try {
    ctx.body = {
      message: '测试成功',
      code: 0
    }
  } catch (error) {
    console.log(error)
  }
})

// 用户注册逻辑
router.post('/api/register', async ctx => {
  const { username, password } = ctx.request.body
  const isRegister = await User.find({ username })
  if (isRegister.length > 0) {
    ctx.body = {
      code: -1,
      message: '该用户名已被注册'
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
      code: -1
    }
  }
})

// 用户登录逻辑
router.post('/api/login', async ctx => {
  const { username, password } = ctx.request.body
  // 验证用户是否存在
  const user = await User.findOne({ username })
  if (!user) {
    return (ctx.body = {
      message: '用户名不存在',
      code: -1
    })
  }
  // 验证密码 && 生成token并下发
  const isPasswordValid = require('bcrypt').compareSync(password, user.password)
  if (isPasswordValid) {
    const token = createToken(user._id)
    ctx.body = {
      token: token,
      message: '登录成功',
      code: 0
    }
  }
})

module.exports = {
  router
}
