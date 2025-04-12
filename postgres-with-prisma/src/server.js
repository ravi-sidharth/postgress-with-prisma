require('dotenv').config()
const express = require('express')
const authorRouter = require('./routers/author-routes')
const bookRouter = require('./routers/book-routes')

const app = express()
const PORT = process.env.PORT || 3000 

app.use(express.json())

app.use('/api/author',authorRouter)
app.use('/api/book',bookRouter) 

app.listen(PORT, ()=> console.log(`Server Started at Port:${PORT}`))
