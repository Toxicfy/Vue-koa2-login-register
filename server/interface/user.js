const Koa = require('koa')
const Router = require('koa-router')
const URL = require('../dbs/config').URL
const app = new Koa()
const router = new Router()


const cors = require('koa2-cors')   
app.use(cors())


router.get('/', async ctx => {
    ctx.body = URL
})

router.post('/api/register', async ctx => {
    const { username, password } = ctx.request.body
    console.log(username, password);
    ctx.body = {
        message: username
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
