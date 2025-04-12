const query = require('../db/db')

async function getUsersWithPosts() {
    const getUsersWithPostsQuery = `
    SELECT users.id , users.username, posts.title
    FROM users 
    INNER JOIN posts ON users.id = posts.userId
    `

    try {
        const res = await query(getUsersWithPostsQuery)
        return res.rows 
    } catch(e) {
        console.error('Error occured while using inner join',e)
    }
}

async function getAllUsersWithTheirPosts() {
    const getAllUsersWithTheirPostsQuery = `
    SELECT users.id, users.username, posts.title 
    FROM users 
    LEFT JOIN posts ON users.id = posts.userId
    ` 

    try {
        const res = await query(getAllUsersWithTheirPostsQuery)
        return res.rows
    } catch(e){
        console.log('Error occured while fetching all the posts',e) 
    }
}



module.exports = {getUsersWithPosts,getAllUsersWithTheirPosts}