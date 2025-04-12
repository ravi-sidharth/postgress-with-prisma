const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

async function addAuthor(name) {
    const author = await prisma.author.create({
        data:{
            name
        }
    })
    return author 
}

async function getAllAuthor() {
    try {
        const getAllAuthor = await prisma.author.findMany()
        return getAllAuthor 
    } catch(e) {
        throw e 
    }
}

async function getAuthorById(id) {
    try {
        const getAuthor = await prisma.author.findUnique({
            where:{id}
        })
        return getAuthor 
    } catch(e) {
        throw e 
    }
    
}

async function updateAuthor(id,newName) {
    try {
        const updateAuthorById = await prisma.author.update({
            where:{id},
            data:{
                name:newName
            }
        })
        return updateAuthorById 
    } catch(e) {
        throw e 
    }
}

async function deletedAuthor(id) {
    try {
        const deleteAuthorById = await prisma.author.delete({
            where:{id}
        })
        return deleteAuthorById 
    } catch(e) {
        throw e 
    }
    
}

module.exports = {
    addAuthor,
    deletedAuthor,
    getAllAuthor,
    getAuthorById,
    updateAuthor
}