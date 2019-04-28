import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Message, Typing } from 'src/app/models/';

@Injectable({
  providedIn: 'root'
})
export class SocketIoService {
  message = this.socket.fromEvent<Message>('msg');
  typing = this.socket.fromEvent<Typing>('typing');
  clear = this.socket.fromEvent('clear');

  constructor(private socket: Socket) { }

  startTyping(userName: string) {
    this.socket.emit('typing', userName);
  }

  clearTyping() {
    this.socket.emit('clear');
  }

  sendMessage(msg: Message) {
    this.socket.emit('msg', msg);
  }
}
