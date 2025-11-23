const db = require('../db/queries')
require('dotenv').config

async function getJoinclubForm(req,res){
    res.render('pages/joinclub',{title: 'JOIN CLUB', user: req.user})
}

async function joinClub(req,res){
    const {passcode} = req.body;
    if(passcode === process.env.PASSCODE){
        await db.makeClubMember(req.user.id)
        res.redirect('/')
    }else{
        res.render('pages/joinclub', {title: 'JOIN CLUB', user: req.user, errors: [{ msg: 'Wrong passcode' }]} )
    }
}

module.exports = {
    getJoinclubForm,
    joinClub
}