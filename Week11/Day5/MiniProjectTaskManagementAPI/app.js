const express = require('express')
const app = express()
const router = require('./tasks')


app.use(express.json())
app.use('/tasks', router)

app.listen(5000, () => {
    console.log('server is listening on port 5000')
})