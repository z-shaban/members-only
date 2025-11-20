require ('dotenv').config();
const express = require('express')
const PORT = process.env.PORT || 3000
const indexRouter = require('../inventory/routes/indexRouter');

const app = express();


app.use('/', indexRouter)

app.listen(PORT, (error)=>{
    if (error){
        throw error
    }
    console.log('server is running')
})