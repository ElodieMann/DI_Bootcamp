const express = require('express');
const app = express();
const db = require('./server/config/knex');
const booksRoutes = require('./server/routes/booksRoutes');

app.use(express.json());

app.use('/api/books', booksRoutes);

app.set('db', db);


app.listen(5000, () => console.log(`Example app listening on port 5000!`));
