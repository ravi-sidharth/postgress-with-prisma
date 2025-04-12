const express = require('express')
const bookController = require('../controllers/book-controller')
const router = express.Router()

router.post('/add-book',bookController.addBook)
router.get('/get-books',bookController.getAllBook)
router.get('/:id',bookController.getBookById)
router.put('/:id',bookController.updateBook)
router.delete('/:id',bookController.deleteBook)

module.exports = router