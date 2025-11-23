const {Router} = require('express')
const messageRouter = new Router()
const messageController = require('../controllers/messageController')
const { requireAuth } = require('../middlewares/auth')

messageRouter.get('/',requireAuth ,messageController.getMessageForm)
messageRouter.post('/',requireAuth, messageController.addMessage)

module.exports = messageRouter