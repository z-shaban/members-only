async function getSignUpForm(req,res){
    res.render('pages/sign-up',{title: 'Sign Up'})
}

module.exports = {
    getSignUpForm
}