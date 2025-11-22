const {Router} = require('express')
const loginRouter = new Router()
const loginController = require('../controllers/loginController')
const passport = require('passport')


loginRouter.get('/', loginController.getloginForm)
loginRouter.post('/',   passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/sign-up"
  }))


module.exports = loginRouter