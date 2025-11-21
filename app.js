require ('dotenv').config();
const express = require('express')
const PORT = process.env.PORT || 3000
const indexRouter = require('./routes/indexRouter')
const signUpRouter = require('./routes/signUpRouter')
const path = require('path')
const expressLayouts = require('express-ejs-layouts')


const app = express();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'))
app.use(expressLayouts);
app.use(express.urlencoded({extended:true}))

app.use('/', indexRouter )
app.use('/sign-up', signUpRouter)

app.listen(PORT, (error)=>{
    if (error){
        throw error
    }
    console.log('server is running')
})