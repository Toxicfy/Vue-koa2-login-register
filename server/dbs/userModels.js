const mongoose = require('mongoose')
const Schema = mongoose.Schema
const URL = require('./config').URL

mongoose.connect(URL, {
  useNewUrlParser: true,
  useCreateIndex: true
})

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    set: val => require('bcrypt').hashSync(val, 10)
  }
})

module.exports = {
  Users: mongoose.model('User', UserSchema)
}
