const {Router} = require('express')
const loginRouter = new Router()
const loginController = require('../controllers/loginController')

loginRouter.get('/', loginController.getloginForm)


module.exports = loginRouter