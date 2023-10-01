const express = require('express');
const app = express();
const router = require('./routes/todos');

app.use(express.json());
app.use('/todos', router);

app.listen(3000, () => {
  console.log(`listening`);
});