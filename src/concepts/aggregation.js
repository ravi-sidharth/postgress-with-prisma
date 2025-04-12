const query = require('../db/db')

async function countUsersPost() {
    const countUsersPostQuery = `
    SELECT users.username, users.id , COUNT(posts.userId) as post_counts
    FROM users 
    LEFT JOIN posts ON users.id = posts.userId
    GROUP BY users.id
    `
    try {
        const res = await query(countUsersPostQuery)
        return res.rows
    } catch(e) {
        console.log('Error',e)      
    }
}

async function averageOfPerUsersPost() {
    const averageOfPerUsersPostQuery = `
    SELECT AVG(post_count) as average_posts 
    FROM(
    SELECT COUNT(posts.id) as post_count 
    FROM users 
    LEFT JOIN posts ON users.id = posts.userId
    GROUP BY users.id 
    ) as userPerCount

    `;

    try{
        const res = await query(averageOfPerUsersPostQuery)
        return res.rows
    } catch(e) {
        console.error('Error occured',e)     
    }


}

module.exports = {countUsersPost, averageOfPerUsersPost}