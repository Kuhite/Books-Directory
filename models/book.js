const mongoose = require('mongoose')
const validator = require('validator')
const Book = mongoose.model('books',{
    Title: {
        type: String,
        required:true,
        validate (value) {
            if(validator.isEmpty(value)){
                throw new Error('Title is required!')
            }
        }
    },

    Author: {
        type: String,
        required: true,
        validate (value) {
            if(validator.isEmpty(value)){
                throw new Error('Author is required!')
            }
        }
    }
})

module.exports = Book