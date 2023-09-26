const express = require('express');
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;
const path = require('path');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

const roomName = 'my-chat-room'; 
const activeUsers = {};


io.on('connection', (socket) => {
  socket.on('join', (username) => {
    socket.join(roomName);

    activeUsers[socket.id] = username;

    io.to(roomName).emit('activeUsers', Object.values(activeUsers));
   
    io.to(roomName).emit('chat message', { user: 'System', text: `${username} has joined the chat` });
  });

  socket.on('chat message', (msg) => {
    
    io.to(roomName).emit('chat message', { user: activeUsers[socket.id], text: msg });
  });

  socket.on('disconnect', () => {
    
    const disconnectedUser = activeUsers[socket.id];
    delete activeUsers[socket.id];
    
    io.to(roomName).emit('activeUsers', Object.values(activeUsers));
    
    io.to(roomName).emit('chat message', { user: 'System', text: `${disconnectedUser} has left the chat` });
  });
});



http.listen(port, host, () => {
  console.log(`Socket.IO server running at http://${host}:${port}/`);
});
