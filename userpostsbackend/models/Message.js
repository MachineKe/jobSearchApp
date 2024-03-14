const { model, Schema } = require('mongoose')

const messageSchema = new Schema({
  body: String,
  username: String,
  createdAt: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
})

module.exports = model('Message', messageSchema)