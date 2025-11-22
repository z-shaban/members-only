require ('dotenv').config();
const express = require('express')
const PORT = process.env.PORT || 3000
const indexRouter = require('./routes/indexRouter')
const signUpRouter = require('./routes/signUpRouter')
const path = require('path')
const expressLayouts = require('express-ejs-layouts');
const loginRouter = require('./routes/loginRouter');
const session = require('express-session')
const pgSession = require('connect-pg-simple')(session)


const app = express();

const sessionStore = new pgSession({
    conString: process.env.DB_URL,
    createTableIfMissing: true
})

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'))
app.use(expressLayouts);
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie:{
        maxAge: 1000 * 60 * 60 * 24
    }
}))

app.use('/', indexRouter )
app.use('/sign-up', signUpRouter)
app.use('/login', loginRouter)

app.listen(PORT, (error)=>{
    if (error){
        throw error
    }
    console.log('server is running')
})