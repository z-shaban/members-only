const {Router} = require('express')
const messageRouter = new Router()
const messageController = require('../controllers/messageController')

messageRouter.get('/',messageController.getMessageForm)
messageRouter.post('/',messageController.addMessage)

module.exports = messageRouter