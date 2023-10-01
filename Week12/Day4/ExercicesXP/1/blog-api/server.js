const express = require('express');
const app = express();
const db = require('./server/config/knex');
const postsRoutes = require('./server/routes/postsRoutes');

app.use(express.json());

app.use('/posts', postsRoutes);

app.set('db', db);

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
