const express = require('express')
const router = express.Router()
const Book = require('../models/book')
router.get('/', (req,res) =>{
    
})

router.post('/', (req,res) =>{
    try{
    const book = new Book(req.body)
    book.save().then(() => {
        res.send('Book added to collection')
    })
    }catch(error){
        res.send({'Error': error})
    }
})

router.delete('/', (req,res) =>{
    res.send('Data deleted')
})

router.patch('/', (req,res) =>{
    res.send('Data updated')
})

module.exports = router