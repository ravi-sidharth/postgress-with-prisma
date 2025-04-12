const {Pool} = require('pg')


// create a new pool instance to manage database connections
const pool = new Pool({
    connectionString:process.env.DATABASE_URL
})

async function query(text, params){
    const start = Date.now();

    try{
        const result = await pool.query(text,params);
        // execute the time-> 
        const duration = Date.now() - start;
        console.log(`Executed query ${{text,duration,rows:result.rowCount}}`)
        return result
    } catch(err) {
        console.error('Error occured while connecting database',err)
        throw err;
    }
}

module.exports = query