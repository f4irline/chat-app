'use strict'
const { Room } = require ('../models');

const defaultRoom = {
    id: 0,
    roomName: 'General',
};

let allUsers = [];

module.exports  = function (io, socket) {
    let currentRoom = defaultRoom;
    let previousRoom = {
        id: undefined,
        roomName: undefined,
    }

    return {
        join: (data) => {
            if (checkExistingUser(socket.id)) {
                allUsers.push({
                    id: socket.id,
                    userName: data.userName,
                });    
            }
            if (data.room) {
                joinRoom(data.room);
            } else {
                socket.join(currentRoom.id);
                io.to(currentRoom.id).emit('users', getUsersInRoom(io.sockets.adapter.rooms[currentRoom.id].sockets));
                socket.emit('room', currentRoom);
            }
        },
        sendMsg: (data) => {
            io.to(currentRoom.id).emit('msg', data);
        },
        emitTyping: (data) => {
            socket.to(currentRoom.id).broadcast.emit('typing', data);
        },
        emitClear: () => {
            socket.to(currentRoom.id).broadcast.emit('clear');
        },
        userDisconnect: () => {
            allUsers = allUsers.filter((user) => user.id !== socket.id);
            if (io.sockets.adapter.rooms[currentRoom.id]) {
                socket.to(currentRoom.id).broadcast.emit('users', getUsersInRoom(io.sockets.adapter.rooms[currentRoom.id].sockets));
            }
        }
    }

    function joinRoom (roomId) {
        previousRoom = currentRoom;
        findRoom(roomId).then((newRoom) => {
            currentRoom = newRoom;
            socket.join(newRoom.id);
            if (io.sockets.adapter.rooms[previousRoom.id]) {
                leavePreviousRoom(previousRoom.id);
            }
            io.to(newRoom.id).emit('users', getUsersInRoom(io.sockets.adapter.rooms[newRoom.id].sockets));    
            socket.emit('room', newRoom);
        });
    }

    function leavePreviousRoom(roomId) {
        socket.leave(roomId);
        if (io.sockets.adapter.rooms[roomId]) {
            io.to(roomId).emit('users', getUsersInRoom(io.sockets.adapter.rooms[roomId].sockets));
        }
    }

    function getUsersInRoom (room) {
        const roomObject = Object.keys(room).map((socket) => {
            return socket;
        });

        const usersInRoom = [];
        for (const user of allUsers) {
            for (const socket of roomObject) {
                if (user.id === socket) {
                    usersInRoom.push(user);
                }
            }
        }
        return usersInRoom;
    }
    
    function checkExistingUser(socketId) {
        for (const user of allUsers) {
            if (user.id === socketId) {
                return false;
            }
        }
        
        return true;
    }

    async function findRoom (roomId) {
        return Room.findOne({ where: {id: roomId} });
    }
}

