const {model, Schema} = require('mongoose')

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  phone: String,
  createdAt: String,
  followers: [
    {
      username: String,
      createdAt: String,
    }
  ],
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'users'
  // }
})

module.exports = model('User', userSchema);