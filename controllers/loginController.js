const passport = require('passport')
async function getloginForm(req, res) {
    res.render('pages/login',{title: 'Log In', user: req.user})
}

async function login(req,res){
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/sign-up"
  })(req, res)
}
 


module.exports = {
    getloginForm,
    login   
}