import { Component, OnInit, Input, AfterViewChecked, OnDestroy } from '@angular/core';
import { Message } from 'src/app/models/Message';
import { SocketIoService } from 'src/app/services';
import { Typing } from 'src/app/models/Typing';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked, OnDestroy {

  @Input() userName: string;

  typing: Typing;
  msg: Message;
  messages: Message[];

  msgSubscription$: Subscription;
  clearSubscription$: Subscription;
  typingSubscription$: Subscription;

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

  ngOnDestroy() {
    this.msgSubscription$.unsubscribe();
    this.clearSubscription$.unsubscribe();
    this.typingSubscription$.unsubscribe();
  }

  ngOnInit() {
    this.scrollToBottom();

    this.msg.userName = this.userName;

    this.msgSubscription$ = this.socketIo.message.subscribe((msg) => {
      this.messages.push(msg);
    });

    this.clearSubscription$ = this.socketIo.clear.subscribe(() => {
      this.typing = {
        userName: undefined,
      };
    });

    this.typingSubscription$ = this.socketIo.typing.subscribe((name) => {
      this.typing = {
        userName: name,
      };
    });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
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

  scrollToBottom() {
    const chatContainer = document.querySelector('.chat-container');
    chatContainer.scrollTop = chatContainer.scrollHeight - chatContainer.clientHeight;
  }
}
