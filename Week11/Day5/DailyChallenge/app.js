const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

const usersFilePath = path.join(__dirname, 'users.json');
app.get('/users', (req, res) => {
    const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));
    res.json(users);
})
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));
    const user = users.find((user) => user.id === userId);

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
})
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));


    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({ error: 'Internal server error' });
        }

        const newUser = {
            id: users.length + 1,
            username: username,
            password: hash,
        };

        users.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));

        res.status(201).json({ message: 'User registered successfully' });
    });
})
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));

    const user = users.find((user) => user.username === username);

    if (!user) {
        return res.status(401).json({ error: 'Authentication failed' });
    }

    bcrypt.compare(password, user.password, (err, result) => {
        if (err || !result) {
            return res.status(401).json({ error: 'Authentication failed' });
        }

        res.json({ message: 'Login successful' });
    });
})
app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const { username, password } = req.body;
    const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));
    const userIndex = users.findIndex((user) => user.id === userId);

    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found' });
    }

    users[userIndex] = {
        id: userId,
        username: username,
        password: password, 
    };

    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));

    res.json({ message: 'User information updated successfully' });
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});