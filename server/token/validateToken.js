const jwt = require('jsonwebtoken')
const { PRIVATE_KEY } = require('./key')
const User = require('../dbs/userModels').Users

module.exports = async (ctx, next) => {
  const authorization = ctx.get('Authorization')
  if (!authorization) {
    ctx.throw(401)
  }
  jwt.verify(
    authorization.split(' ').pop(),
    PRIVATE_KEY,
    async (err, decoded) => {
      if (err) {
        ctx.throw(401)
      } else {
        ctx.id = decoded.id
      }
    }
  )
  await next()
}
