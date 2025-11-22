const db = require('../db/queries')
const bcrypt = require('bcryptjs')
const session = require('express-session')

async function getloginForm(req, res) {
    res.render('pages/login',{title: 'Log In'})
}

module.exports = {
    getloginForm   
}