const bookService = require('../services/bookService')

async function addBook(req,res) {
    const {title, publishedDate,authorId} = req.body 
    console.log(title,publishedDate,authorId,"aesrtdfgyhjbkn")
    try {
      const book = await bookService.addBookQuery(title,publishedDate,authorId) 
      console.log(book,"My book and bok")
      if (!book) {
        res.status(404).json({
            success:false,
            message:'Error occured while creating the book'
        })
      }
      
      res.status(201).json({
        success:true,
        newlyCreatedBook:book
    })
    } catch(err) {
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
} 

async function getAllBook(req,res) {
    try {
        const books = await bookService.getAllBook()
        if (!books){
            res.status(404).json({
                success:false,
                message:'Book Not Found!'
            })
        }

        res.status(200).json({
            success:true,
            books
        })

    } catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
} 

async function getBookById(req,res) {
    try {
        const book = await bookService.getBookById(parseInt(req.params.id))

        if (!book){
            res.status(404).json({
                success:false,
                message:'Book Not Found!'
            })
        }
        res.status(200).json({
            success:true,
            book
        })

    } catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        }) 
    }
} 

async function updateBook(req,res) {
    try {
        const book = await bookService.updateBook(parseInt(req.params.id),req.body.newTitle)
        if (!book){
            res.status(404).json({
                success:false,
                message:'Book Not Found!'
            })
        }

        res.status(200).json({
            success:true,
            book
        })
    } catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    } 
} 

async function deleteBook(req,res) {
    try {
        const book = await bookService.deleteBook(parseInt(req.body.id))
    } catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
} 

module.exports = {
    addBook,
    getAllBook,
    getBookById,
    updateBook,
    deleteBook
}