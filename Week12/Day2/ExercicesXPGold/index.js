const express = require('express');
const app = express();
const router = require('./routes/posts');

app.use(express.json());
app.use('/posts', router);

app.listen(3000, () => {
  console.log(`listening`);
});