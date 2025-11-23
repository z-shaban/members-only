const {Router} = require('express')
const { requireAuth } = require('../middlewares/auth')
const joinclubRouter = Router()
const joinclubController = require('../controllers/joinclubController')

joinclubRouter.get('/', requireAuth, joinclubController.getJoinclubForm)
joinclubRouter.post('/',requireAuth, joinclubController.joinClub)

module.exports = joinclubRouter