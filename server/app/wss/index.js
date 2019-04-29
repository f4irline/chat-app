const socket = require('socket.io');

module.exports = (server) => {
    const io = socket(server);
    let users = [];

    io.on('connection', (socket) => {
        console.log('Connection made, id: ', socket.id);

        socket.on('join', (data) => {
            users.push({
                id: socket.id,
                userName: data,
            });
            io.sockets.emit('users', users);
        });

        socket.on('msg', (data) => {
            io.sockets.emit('msg', data);
        });

        socket.on('typing', (data) => {
            socket.broadcast.emit('typing', data);
        });

        socket.on('clear', () => {
            socket.broadcast.emit('clear');
        });

        socket.on('disconnect', () => {
            users = users.filter((user) => user.id !== socket.id);
            socket.broadcast.emit('users', users);
        })
    });
}