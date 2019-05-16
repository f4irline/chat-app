'use strict'
const { Room } = require ('../models');
const { Message } = require ('../models');

let allUsers = [];

module.exports  = function (io, socket) {
    let currentRoom = {
        id: undefined,
        roomName: undefined,
    };
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
                findRoom(data.room).then((newRoom) => {
                    joinRoom(newRoom);
                })
            } else {
                findRoom(1).then((newRoom) => {
                    joinRoom(newRoom);
                })
            }
        },
        sendMsg: (data) => {
            if (data.private) {
                sendPm(data);
            } else {
                io.to(currentRoom.id).emit('msg', data);
                saveToRoom(currentRoom.id, data);
            }
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

    function saveToRoom(id, data) {
        Message.create({
            msg: data.msg,
            userName: data.userName,
            private: data.private,
            roomId: id
        });
    }

    function sendPm(data) {
        const receiverName = parseReceiver(data.msg).toLowerCase();
        const receiver = findReceiver(receiverName);
        if (receiver) {
            const message = parseMessage(data.msg, receiverName);
            data.msg = message;
            io.to(receiver.id).emit('msg', data);
            socket.emit('msg', data);    
        } else {
            socket.emit('no-receiver-found', data);
        }
    }

    function parseReceiver(msg) {
        let receiver = '';
        for (let i = 4; i < msg.length; i++) {
            if (msg[i] === ' ') {
                break;
            }
            receiver += msg[i];
        }

        return receiver;
    }

    function parseMessage(msg, receiverName) {
        const msgStarts = 4 + receiverName.length + 1;
        let message = '';
        for (let i = msgStarts; i < msg.length; i++) {
            message += msg[i];
        }

        return message;
    }

    function findReceiver(receiverName) {
        for (const user of allUsers) {
            if (user.userName.toLowerCase() === receiverName) {
                return user;
            }
        }

        return undefined;
    }

    function joinRoom (newRoom) {
        previousRoom = currentRoom;
        currentRoom = newRoom;
        socket.join(newRoom.id);
        if (io.sockets.adapter.rooms[previousRoom.id]) {
            leavePreviousRoom(previousRoom.id);
        }
        io.to(newRoom.id).emit('users', getUsersInRoom(io.sockets.adapter.rooms[newRoom.id].sockets));    
        socket.emit('room', newRoom);
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
        return Room.findOne({ where: {id: roomId}, include: ['messages'] });
    }
}

