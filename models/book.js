const mongoose = require('mongoose')

const Book = new mongoose.model('books',{
    Title: {
        type: String,
        min: 1
    },

    Author: {
        type: String
    }
})

module.exports = Book