const {Router} = require('express')
const indexRouter = new Router()
const indexController = require('../controllers/indexController')

indexRouter.get('/', indexController.getMessages)

module.exports = indexRouter