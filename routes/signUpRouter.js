const {Router} = require('express')
const signUpRouter = new Router()
const signUpController = require('../controllers/signUpController')

signUpRouter.get('/', signUpController.getSignUpForm)
signUpRouter.post('/', signUpController.createUser)

module.exports = signUpRouter