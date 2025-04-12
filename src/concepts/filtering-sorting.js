const query = require('../db/db')

async function getFilterByWhereClause(condititon) {
    const getFilterByWhereClauseQuery =`
    SELECT * FROM users
    WHERE ${condititon}
    `

    try {
        const result = await query(getFilterByWhereClauseQuery)
        return result.rows
    } catch(e) {
        console.log('Error occured while fetching the result',e)
    }
}

async function  getFilterByCreatedAt(column, order='ASC') {
    const getFilterByCreatedAtQuery = ` 
    SELECT * FROM users
    ORDER BY ${column} ${order} 
    `

    try {
        const res = await query(getFilterByCreatedAtQuery)
        return res.rows
    } catch(e) {
        console.log('Error occured while sorting',e)
    }
}

async function pagination(limit,offset) {
    const paginationQuery = `
    SELECT * FROM users
    LIMIT ${limit} 
    OFFSET ${offset}
    `

    // instead of ${limit} we can use $1 and instead of ${offset} we can use $2.


    try {
        const res = await query(paginationQuery,[limit,offset])
        return res.rows
    } catch(e) {
        console.log('Error occured while pagination',e)
    }
}

module.exports = {getFilterByWhereClause, getFilterByCreatedAt,pagination}