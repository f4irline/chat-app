import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Message, Typing, User } from 'src/app/models/';
import { UserDetails } from 'src/app/models/UserDetails';

@Injectable({
  providedIn: 'root'
})
export class SocketIoService {
  message = this.socket.fromEvent<Message>('msg');
  typing = this.socket.fromEvent<Typing>('typing');
  clear = this.socket.fromEvent('clear');
  users = this.socket.fromEvent<User[]>('users');

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

  sendUserDetails(userDetails: UserDetails) {
    this.socket.emit('join', userDetails);
  }

  disconnect() {
    this.socket.emit('userLeave');
  }

  joinRoom(id: number) {
    this.socket.emit('joinRoom', id);
  }
}
