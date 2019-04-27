const socket = require('socket.io');

module.exports = (server) => {
    const io = socket(server);

    io.on('connection', (socket) => {
        console.log('Connection made, id: ', socket.id);
        socket.on('msg', (data) => {
            io.sockets.emit('msg', data);
        });

        socket.on('typing', (data) => {
            socket.broadcast.emit('typing', data);
        });

        socket.on('clear', () => {
            socket.broadcast.emit('clear');
        })
    });
}