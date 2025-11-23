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
const passport = require('passport');
const messageRouter = require('./routes/messageRouter');
const logout = require('./routes/logout');
const joinclubRouter = require('./routes/joinclubRouter');
require('./config/passport')


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
app.use(passport.session())

app.use((req, res, next) => {
    console.log('========== SESSION DEBUG ==========');
    console.log('req.session:', req.session);
    console.log('req.user:', req.user);
    console.log('req.isAuthenticated():', req.isAuthenticated());
    console.log('===================================');
    next();
});

app.use('/', indexRouter )
app.use('/sign-up', signUpRouter)
app.use('/login', loginRouter)
app.use('/message', messageRouter)
app.use('/logout', logout)
app.use('/join-club',joinclubRouter)

app.listen(PORT, (error)=>{
    if (error){
        throw error
    }
    console.log('server is running')
})