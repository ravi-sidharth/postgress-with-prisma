const query = require('../db/db')

async function relationshipTable() {
    const relationshipTableQuery = `
    CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    userId INTEGER REFERENCES users(id) ON DELETE CASCADE,
    createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )`

    try {
        const result = await query(relationshipTableQuery)
        console.log('posts table created successfully!')
        return result.rows
    } catch(e) {
        console.error('Error occured while creating posts table',e)
    }

}

async function insertDataIntoPosts(title,content,userId) {
    const insertDataIntoPostsQuery = `
    INSERT INTO posts(title,content,userId)
    VALUES ($1,$2,$3)
    RETURNING *
    `

    const res = await query(insertDataIntoPostsQuery,[title,content,userId])
    console.log('Data inserted successfully',res.rows[0])
    return res.rows[0]
}

module.exports = {
    relationshipTable,
    insertDataIntoPosts
}