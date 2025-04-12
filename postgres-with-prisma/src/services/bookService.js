const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

async function addBookQuery(title,publishedDate,authorId) {
    try {
        const book = await prisma.book.create({
            data:{
                title,
                publishedDate,
                authorId
            },
            include:{author:true}
        })
        return book 

    } catch(e) {
        throw e
    }
}

async function getAllBook() {
    try {
        const books = await prisma.book.findMany({
            include:{author:true}
        })
        return books 

    } catch(e) {
        throw e
    }  
}

async function getBookById(id) {
    try {
        const book = await prisma.book.findUnique({
            where:{id},
            include:{author:true}
        }) 
        return book 
    } catch(e) {
        throw e 
    }
}

async function updateBook(id,newTitle) {
    try {
        const book = await prisma.book.update({
            where :{id},
            data:{
                title:newTitle
            },
            include:{author:true}
        })

        return book
    } catch(e) {
        throw e
    }
}

async function deleteBook(id) {
    try {
        const book = await prisma.book.delete({
            where:{id},
            include:{author:true}
        })
        return book 
    } catch(e) {
        throw e
    }
}



module.exports = {
    addBookQuery,
    getAllBook,
    getBookById,
    updateBook,
    deleteBook
}