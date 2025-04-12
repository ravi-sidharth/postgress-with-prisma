const query = require('../db/db')

async function createUsersTable(){
    const createTableQuery =`
    CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(30) UNIQUE NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    ) 
    `
    try {
        await query(createTableQuery)
        console.log(`Users table created successfully!`);
    } catch(err){
        console.error('Error occured while creating the users table',err)
        throw err;
    }
}

async function insertUsersTable(username,email){
    const inserUsersQuery =`
    INSERT INTO users (username, email)
    VALUES ($1,$2)
    RETURNING *
    `

    try{
        const result = await query(inserUsersQuery,[username,email])
        console.log("user inserted successfully",result.rows[0])
    } catch(e) {
        console.error('Error occured while inserting the data',e)
    }
}

async function getAllUsers(){
    const getAllUsersQuery =`SELECT * FROM users`
    try {
        const res = await query(getAllUsersQuery)
        console.log(`Users fetch successfully`,res.rows)

    } catch(e) {
        console.log('Error occured while fetching the user',e)
    }
}

async function updateUserEmail(userName ,newEmail) {
    const updateUserQuery = `
    UPDATE users
    SET email = $2
    WHERE userName = $1
    RETURNING *
    `
    try {
        const res = await query(updateUserQuery,[userName, newEmail])
        console.log(`User Updated successfully ${JSON.stringify(res.rows[0])}`)
    } catch(e) {
        console.log('Error occured while updating the user email',e)
    }
}

async function userDeletedByEmail(username) {
    const userDeletedQuery = `
    DELETE FROM users 
    WHERE username = $1 
    RETURNING *
    ` 

    try {
        const res = await query(userDeletedQuery,[username])
        console.log('User deleted successfully!',res.rows[0])
    } catch(err){
        console.log('Error occured while deleting the post',err)
    }
}

module.exports = { createUsersTable,insertUsersTable, getAllUsers, updateUserEmail, userDeletedByEmail }
