const express = require('express')
const router = express.Router()
const Book = require('../models/book')
router.get('/', async(req,res) =>{
    try{
        const getbook = await Book.find({})
        if(!getbook){
            res.send('Book not found')
        }
        res.send(getbook)

    }catch(error){
        res.status(404).send(error)
    }

})

router.post('/', async(req,res) =>{
    try{
    const book = await new Book(req.body)

    if(!book){
        res.send("No record entered")
    }
    book.save()
        res.send(book)
    }catch(error){
        res.status(404)
    }


})

router.delete('/', async(req,res) =>{
    try{
    const toberemoved = await req.body.Title
    const books = await Book.deleteOne({Title: toberemoved})
    if(!books){
        res.status(404).send()
    }
    res.send(books)
    }catch(error){
        res.status(401)
    }   
})

router.patch('/book/:id',async(req,res) =>{
    try{
        const book = await Book.findByIdAndUpdate(req.params.id, req.body)
        if(!book){
            res.send('Book with id not found')
        }
        res.send(book)

    }catch(error){
        res.status(404)
    }
})

module.exports = router