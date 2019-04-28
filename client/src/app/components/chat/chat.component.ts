import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/models/Message';
import { SocketIoService } from 'src/app/services';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input() userName: string;

  msg: Message;
  messages: Message[];

  constructor(private socketIo: SocketIoService) {
    this.msg = {
      userName: '',
      msg: ''
    };

    this.messages = [];
  }

  ngOnInit() {
    this.msg.userName = this.userName;
    this.socketIo.message.subscribe((msg) => {
      this.messages.push(msg);
      console.log(this.messages);
    });

    this.socketIo.clear.subscribe(() => {
      console.log('Someone cleared');
    });

    this.socketIo.typing.subscribe((name) => {
      console.log(`${name} started typing.`);
    });
  }

  msgChanged(event: any) {
    this.msg.msg = event;

    if (this.msg.msg.length > 0) {
      this.socketIo.startTyping(this.userName);
    } else {
      this.socketIo.clearTyping();
    }
  }

  send() {
    this.socketIo.sendMessage(this.msg);
    this.msg.msg = '';
  }
}
