const Message = require("../../models/Message")
const checkAuth = require('../../util/check-auth')
const { AuthenticationError, UserInputError } = require('apollo-server')

module.exports = {
  Query: {
    async getMessages() {
      try {
        const messages = await Message.find().sort({ createdAt: -1 })
        return messages;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getMessage(_, {messageId}) {
      try {
        const message = await Message.findById(messageId)
        if (message) {
          return message
        } else {
          throw new Error('Message not found')
        }
      } catch (err) {
        throw new Error(err)
      }
    },
  },
  Mutation: {
    async createMessage(_, { body }, context) {
      const user = checkAuth(context)
      if (body.trim() === "") {
        throw new Error("Message body must not be empty")
      }

      const newMessage = new Message({
        body,
        user: user.id,
        username: user.username,
        createdAt: new Date().toISOString(),        
      })
      const message = await newMessage.save()
      return message
    }
  }
}