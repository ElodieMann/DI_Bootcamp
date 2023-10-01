const express = require('express')
const app = express()
const db = require('./server/config/knex')
const tasksRoutes = require('./server/routes/tasksRoutes')

app.use(express.json())

app.use('/api/todos', tasksRoutes)

app.set('db', db)

app.listen(3000, () => console.log('Example app listening on port 3000'))