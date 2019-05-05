'use strict'

module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('Connection made, id: ', socket.id);
        const handler = require('./handlers')(io, socket);

        socket.on('join', (data) => {
            handler.join(data);
        });

        socket.on('msg', (data) => {
            handler.sendMsg(data);
        });

        socket.on('typing', (data) => {
            handler.emitTyping(data);
        });

        socket.on('clear', () => {
            handler.emitClear();
        });

        socket.on('userLeave', () => {
            handler.userDisconnect();
        });

        socket.on('disconnect', () => {
            handler.userDisconnect();
        });
    });

}