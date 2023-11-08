const express = require('express');
const app = express();
const port = 3000;

const authMiddleware = require('./authMiddleware');  
const cookieParser = require('cookie-parser'); 

app.use(express.json());
app.use(cookieParser()); 

app.get('/', (req, res) => {
  res.send('Hello, JWT Authentication!');
});

app.get('/profile', authMiddleware, (req, res) => {
  res.json({ message: `Welcome, ${req.user.username}!` });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});