import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/models/Message';
import { SocketIoService } from 'src/app/services';
import { Observable, Subscription } from 'rxjs';
import { Typing } from 'src/app/models/Typing';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input() userName: string;

  typing: Typing;

  msg: Message;
  messages: Message[];

  constructor(private socketIo: SocketIoService) {
    this.msg = {
      userName: '',
      msg: ''
    };

    this.messages = [{
      userName: 'test1',
      msg: 'test test tset'
    }, {
      userName: 'test2',
      msg: 'test test testst es'
    }, {
      userName: 'test1',
      msg: 'test test tset'
    }, {
      userName: 'test2',
      msg: 'test test testst es'
    }];

    this.typing = {
      userName: undefined,
    };
  }

  ngOnInit() {
    const chatContainer = document.querySelector('.chat-container');
    chatContainer.scrollTop = chatContainer.scrollHeight - chatContainer.clientHeight;

    this.msg.userName = this.userName;
    this.socketIo.message.subscribe((msg) => {
      this.messages.push(msg);
    });

    this.socketIo.clear.subscribe(() => {
      this.typing = {
        userName: undefined,
      };
    });

    this.socketIo.typing.subscribe((name) => {
      this.typing = {
        userName: name,
      };
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
