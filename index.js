const express = require('express')
const app = express()
const bookrouter = require('./routers/router')
require('./db/mongoose')
const dotenv = require('dotenv')
dotenv.config({path: './config/config.env' })
port = process.env.PORT

app.use(express.json())
app.use(bookrouter)

app.listen(port,()=> {
    console.log('Listening on Port: ', port)
})