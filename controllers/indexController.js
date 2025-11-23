const db = require('../db/queries')
async function getMessages(req,res){
   const messages = await db.getAllMessages();
    res.render('pages/homepage',{title: 'Home Page', user: req.user, messages})
}

module.exports = {
  getMessages
}