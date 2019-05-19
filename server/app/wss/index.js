'use strict'

module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('Connection made, id: ', socket.id);
        const handler = require('./handlers');
        const socketHandler = handler.io(io, socket);

        socket.on('join', (data) => {
            socketHandler.join(data);
        });

        socket.on('msg', (data) => {
            socketHandler.sendMsg(data);
        });

        socket.on('typing', (data) => {
            socketHandler.emitTyping(data);
        });

        socket.on('clear', () => {
            socketHandler.emitClear();
        });

        socket.on('userLeave', () => {
            socketHandler.userDisconnect();
        });

        socket.on('disconnect', () => {
            socketHandler.userDisconnect();
        });
    });

}