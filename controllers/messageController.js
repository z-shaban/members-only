const db = require('../db/queries')

async function getMessageForm(req,res){
    res.render('pages/messages',{title: 'Message', user: req.user})
}

async function addMessage(req,res){
    const {title, message} = req.body
    await db.addMessage(title, message, req.user.id)
    res.redirect('/')
}

module.exports = {
    getMessageForm,
    addMessage
}