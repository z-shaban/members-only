async function getMessages(req,res){
    res.render('pages/homepage',{title: 'Home Page'})
}

module.exports = {
  getMessages
}