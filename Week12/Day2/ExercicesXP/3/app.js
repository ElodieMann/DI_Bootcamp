const express = require('express')
const app = express()
const router = require('./routes/books')


app.use(express.json())
app.use('/books', router)

app.listen(3000, () => {
    console.log('server is listening on port 3000')
})