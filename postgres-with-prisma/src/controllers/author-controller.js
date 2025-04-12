const authorService = require('../services/authorService')

async function addAuthor(req,res) {
   try {
    const {name} = req.body
    const author = await authorService.addAuthor(name)
    res.status(201).json({
        messsage:"Author added successfully!",
        author 
    })
   } catch(e) {
    res.status(404).json({
        Error:e.message 
    })
   }

}

async function getAllAuthor(req,res) {
    try {
      const allAuthor = await authorService.getAllAuthor() 
      res.status(200).json({
        allAuthor
      }) 
    } catch(e) {
        res.status(500).json({
            error:e.message
        })
    }
}

async function getAuthor(req,res) {
    try {
        const Author = await authorService.getAuthorById(parseInt(req.params.id))
        res.status(200).json({
            Author
        })
    } catch(e) {
        res.status(500).json({
            error:e.message
        })
    }

}

async function updateAuthor(req,res) {
    try {
        const updatedAuthor = await authorService.updateAuthor(parseInt(req.params.id),req.body.newName) 
        res.status(200).json({
            updatedAuthor
        })
    } catch(e) {
        res.status(500).json({
            error:e.message
        })
    }
}

async function deleteAuthor(req,res){
    try {
        const author = await authorService.deletedAuthor(parseInt(req.params.id))
        res.status(200).json({
            message:'Author deleted successfully!',
            author
        })
    } catch(e) {
        res.status(404).json({
            Error:e.message 
        })
    }
}

module.exports = {
    addAuthor,
    getAllAuthor,
    getAuthor,
    updateAuthor,
    deleteAuthor
}