const express = require('express')
const app = express()
const bookrouter = require('./routers/router')
require('./db/mongoose')
port = 2615

app.use(express.json())
app.use(bookrouter)

app.listen(port,()=> {
    console.log('Listening on Port: ', port)
})