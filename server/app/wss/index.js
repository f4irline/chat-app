'use strict'

module.exports = (io) => {
    let users = [];

    io.on('connection', (socket) => {
        console.log('Connection made, id: ', socket.id);
        let currentId;

        socket.on('join', (data) => {
            currentId = 0;
            users.push({
                id: socket.id,
                userName: data,
            });
            socket.join(currentId);
            io.sockets.emit('users', users);
        });

        socket.on('msg', (data) => {
            io.to(currentId).emit('msg', data);
        });

        socket.on('typing', (data) => {
            socket.to(currentId).broadcast.emit('typing', data);
        });

        socket.on('clear', () => {
            socket.to(currentId).broadcast.emit('clear');
        });

        socket.on('userLeave', () => {
            users = users.filter((user) => user.id !== socket.id);
            socket.to(currentId).broadcast.emit('users', users);
        });

        socket.on('disconnect', () => {
            users = users.filter((user) => user.id !== socket.id);
            socket.to(currentId).broadcast.emit('users', users);
        });

        socket.on('joinRoom', (id) => {
            socket.leave(currentId);
            socket.join(id);
            currentId = id;
            console.log('Socket joining room: '+id);
        })
    });
}