const authorController = require('../controllers/author-controller')
const express = require('express')
const router = express.Router()

router.post('/add-author',authorController.addAuthor)
router.delete('/:id',authorController.deleteAuthor)
router.put('/:id',authorController.updateAuthor)
router.get('/get-all-author',authorController.getAllAuthor)
router.get('/:id',authorController.getAuthor)

module.exports = router 
