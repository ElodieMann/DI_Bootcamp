const express = require('express')

const app = express()

const db = require('./config/knex')
const toDoRoutes = require('./routes/routes')

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); 
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});



app.use(express.json())

app.use('/', toDoRoutes)

app.set('db', db)

app.listen(3000, () => console.log('Listening on port 3000'))