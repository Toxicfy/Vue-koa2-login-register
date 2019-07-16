const jwt = require('jsonwebtoken')
const PRIVATE_KEY = 'private_key'

module.exports = id => {
  const token = jwt.sign(
    {
      id: id,
      // 设置 token 过期时间
      exp: Math.floor(Date.now() / 1000) + 60 * 60
    },
    PRIVATE_KEY
  )
  return token
}
