import { Component, OnInit, Input, AfterViewChecked, OnDestroy } from '@angular/core';
import { Message, Typing, User, Room } from 'src/app/models/';
import { SocketIoService } from 'src/app/services';
import { Subscription } from 'rxjs';
import { UserDetails } from 'src/app/models/UserDetails';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked, OnDestroy {

  @Input() userDetails: UserDetails;

  whoisTyping: Typing;
  msg: Message;
  messages: Message[];
  room: Room;
  users: User[];

  msgSubscription$: Subscription;
  clearSubscription$: Subscription;
  typingSubscription$: Subscription;
  usersSubscription$: Subscription;
  roomSubscription$: Subscription;

  constructor(private socketIo: SocketIoService) {
    this.msg = {
      userName: '',
      msg: ''
    };

    this.messages = [];

    this.whoisTyping = {
      userName: undefined,
    };

    this.room = {
      roomName: undefined,
    };
  }

  ngOnDestroy() {
    this.msgSubscription$.unsubscribe();
    this.clearSubscription$.unsubscribe();
    this.typingSubscription$.unsubscribe();
    this.usersSubscription$.unsubscribe();
  }

  ngOnInit() {
    this.scrollToBottom();

    this.msg.userName = this.userDetails.userName;

    this.msgSubscription$ = this.socketIo.message.subscribe((msg) => {
      this.messages.push(msg);
    });

    this.clearSubscription$ = this.socketIo.clear.subscribe(() => {
      this.whoisTyping = {
        userName: undefined,
      };
    });

    this.typingSubscription$ = this.socketIo.typing.subscribe((user) => {
      this.whoisTyping = user;
    });

    this.usersSubscription$ = this.socketIo.users.subscribe((users) => {
      this.users = users;
    });

    this.roomSubscription$ = this.socketIo.room.subscribe((room) => {
      this.room = room;
      this.messages = [];
    });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  msgChanged(event: any) {
    this.msg.msg = event;

    if (this.msg.msg.length > 0) {
      this.socketIo.startTyping({userName: this.userDetails.userName});
    } else {
      this.socketIo.clearTyping();
    }
  }

  send() {
    if (this.msg.msg.length > 0) {
      this.socketIo.sendMessage(this.msg);
      this.socketIo.clearTyping();
      this.msg.msg = '';
    }
  }

  scrollToBottom() {
    const chatScrollContainer = document.querySelector('.chat-scroll-container');
    chatScrollContainer.scrollTop = chatScrollContainer.scrollHeight - chatScrollContainer.clientHeight;
  }
}
