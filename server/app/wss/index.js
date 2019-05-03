'use strict'

module.exports = (io) => {
    let users = [];

    io.on('connection', (socket) => {
        let currentRoom = 0;
        let previousRoom = 0;
        console.log('Connection made, id: ', socket.id);

        socket.on('join', (data) => {
            users.push({
                id: socket.id,
                userName: data.userName
            });
            if (data.room) {
                socket.join(data.room);
                previousRoom = currentRoom;
                currentRoom = data.room;
                io.to(currentRoom).emit('users', getUsersInRoom(io.sockets.adapter.rooms[currentRoom].sockets));
            } else {
                socket.join(currentRoom);
                io.to(currentRoom).emit('users', getUsersInRoom(io.sockets.adapter.rooms[currentRoom].sockets));
            }
        });

        socket.on('msg', (data) => {
            io.to(currentRoom).emit('msg', data);
        });

        socket.on('typing', (data) => {
            socket.to(currentRoom).broadcast.emit('typing', data);
        });

        socket.on('clear', () => {
            socket.to(currentRoom).broadcast.emit('clear');
        });

        socket.on('userLeave', () => {
            users = users.filter((user) => user.id !== socket.id);
            socket.to(currentRoom).broadcast.emit('users', users);
        });

        socket.on('disconnect', () => {
            users = users.filter((user) => user.id !== socket.id);
            socket.to(currentRoom).broadcast.emit('users', users);
        });

        socket.on('joinRoom', (roomId) => {
            socket.leave(currentRoom);
            previousRoom = currentRoom;
            currentRoom = roomId;
            socket.join(currentRoom);
            if (io.sockets.adapter.rooms[previousRoom]) {
                io.to(previousRoom).emit('users', getUsersInRoom(io.sockets.adapter.rooms[previousRoom].sockets));
            }
            io.to(currentRoom).emit('users', getUsersInRoom(io.sockets.adapter.rooms[currentRoom].sockets));
        })
    });

    function getUsersInRoom (room) {
        const roomObject = Object.keys(room).map((socket) => {
            return socket;
        });
        const usersInRoom = [];
        for (const user of users) {
            for (const socket of roomObject) {
                if (user.id === socket) {
                    usersInRoom.push(user);
                }
            }
        }
        return usersInRoom;
    }
}