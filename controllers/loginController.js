
async function getloginForm(req, res) {
    res.render('pages/login',{title: 'Log In'})
}


module.exports = {
    getloginForm   
}