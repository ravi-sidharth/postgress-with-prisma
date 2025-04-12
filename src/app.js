require('dotenv').config()
const { countUsersPost, averageOfPerUsersPost } = require('./concepts/aggregation');
const { createUsersTable, insertUsersTable, getAllUsers, updateUserEmail, userDeletedByEmail } = require("./concepts/basic-queries");
const { getFilterByWhereClause, getFilterByCreatedAt, pagination } = require('./concepts/filtering-sorting');
const { getUsersWithPosts, getAllUsersWithTheirPosts } = require('./concepts/joins');
const { relationshipTable, insertDataIntoPosts } = require('./concepts/relationship');

// test basic queries 
async function testBasicQueries(){
    try {
        // await createUsersTable()

        // inserted basic data
        // await insertUsersTable('mai','mai@gmail.com')
        // await insertUsersTable('karan','karan@gmail.com')
        // await insertUsersTable('neha','neha@gmail.com')
        // await insertUsersTable('p','p@gmail.com')
        // await insertUsersTable('priya','priyaa@gmail.com')
        // await insertUsersTable('raja','raja@gmail.com')
        // await insertUsersTable('nikhil','nikhil@gmail.com')
        // await insertUsersTable('rahul','rahul@gmail.com')
        // await insertUsersTable('saurabh','saurabh@gmail.com')
        // await insertUsersTable('deepak','deepak@gmail.com')
        // await insertUsersTable('sandeep','sandeep@gmail.com')


        // fetch all users 
        // getAllUsers()

        // Update User Email 
        // updateUserEmail('sandeep', 'sandeep11@gmail.com')
       
        // user Deleted by Email 
        // userDeletedByEmail('sandeep')
    } catch(e){
        console.error('Error',e)
    }
}

(async function testFilterQueries() {
    // const result = await getFilterByWhereClause("username LIKE 'r%' ")
    // console.log(result)

    // const result = await getFilterByCreatedAt('createdat','DESC')
    // console.log(result)
    
    // const result = await pagination(3,4)
    // console.log(result)
})();

async function testRelationshipTable(params) {
    // const result = await relationshipTable()

    await insertDataIntoPosts('first post','this is first post',11)
    await insertDataIntoPosts('second post','this is second post',13)
    await insertDataIntoPosts('third post','this is third post',15)
    await insertDataIntoPosts('fourth post','this is fourth post',16)

}

async function testAggregationFunctionQuery() {
    const result = await countUsersPost()
    console.log(result)

    // const result = await averageOfPerUsersPost()
    // console.log(result)
} 

async function testJoinRelation() {
    const result = await getUsersWithPosts()
    console.log(result)
}

async function testAllqueries() {
    // await testBasicQueries()
    // await testFilterQueries()
    // await testRelationshipTable()
    // await testJoinRelation()
    // await testAggregationFunctionQuery()
    // const result = await getAllUsersWithTheirPosts()
    // console.log(result)
    testAggregationFunctionQuery()

}

testAllqueries()