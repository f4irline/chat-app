import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Message, User, UserDetails, Room, Typing } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class SocketIoService {
  message = this.socket.fromEvent<Message>('msg');
  typing = this.socket.fromEvent<Typing>('typing');
  clear = this.socket.fromEvent('clear');
  users = this.socket.fromEvent<User[]>('users');
  room = this.socket.fromEvent<Room>('room');
  noReceiver = this.socket.fromEvent<Message>('no-receiver-found');
  invalidReceiver = this.socket.fromEvent<Message>('invalid-receiver');

  constructor(private socket: Socket) { }

  startTyping(typing: Typing) {
    this.socket.emit('typing', typing);
  }

  clearTyping() {
    this.socket.emit('clear');
  }

  sendMessage(msg: Message) {
    this.socket.emit('msg', msg);
  }

  sendUserName(userName: string) {
    this.socket.emit('join', userName);
  }

  join(userDetails: UserDetails) {
    this.socket.emit('join', userDetails);
  }

  disconnect() {
    this.socket.emit('userLeave');
  }
}
