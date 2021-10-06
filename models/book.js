const mongoose = require('mongoose')

const Book = mongoose.model('books',{
    Title: {
        type: String,
        
    },

    Author: {
        type: String
    }
})

module.exports = Book