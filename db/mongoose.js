const mongoose = require('mongoose')
require('dotenv').config({path: './config/config.env'})

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})



