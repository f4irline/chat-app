import { Component, OnInit, Input, AfterViewChecked, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Fade } from '../../animations/Fade';
import { Message, Typing, User, Room, UserDetails } from 'src/app/models/';
import { SocketIoService } from 'src/app/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  animations: [
    Fade,
  ]
})
export class ChatComponent implements OnInit, AfterViewChecked, OnDestroy {

  @Input() userDetails: UserDetails;
  @ViewChild('msgInput') msgInput: ElementRef;

  whoisTyping: Typing;
  msg: Message;
  messages: Message[];
  room: Room;
  users: User[];
  receiverError: boolean;

  errorTimeout: number;

  msgSubscription$: Subscription;
  clearSubscription$: Subscription;
  typingSubscription$: Subscription;
  usersSubscription$: Subscription;
  roomSubscription$: Subscription;
  noReceiverSubscription$: Subscription;

  constructor(private socketIo: SocketIoService) {
    this.msg = {
      userName: '',
      msg: '',
      private: false,
    };

    this.messages = [];

    this.whoisTyping = {
      userName: undefined,
    };

    this.room = {
      roomName: undefined,
    };

    this.receiverError = false;
  }

  ngOnDestroy() {
    this.msgSubscription$.unsubscribe();
    this.clearSubscription$.unsubscribe();
    this.typingSubscription$.unsubscribe();
    this.usersSubscription$.unsubscribe();
    this.roomSubscription$.unsubscribe();

    if (this.errorTimeout) {
      window.clearTimeout(this.errorTimeout);
    }
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

    this.noReceiverSubscription$ = this.socketIo.noReceiver.subscribe((msg) => {
      this.receiverError = true;

      if (this.errorTimeout) {
        window.clearTimeout(this.errorTimeout);
      }

      this.errorTimeout = window.setTimeout(() => {
        this.receiverError = false;
        this.errorTimeout = undefined;
      }, 4000);
    });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  msgChanged(event: any) {
    this.msg.msg = event;
    this.msg.private = false;

    if (this.msg.msg.length > 0) {
      if (this.msg.msg[0] !== '/') {
        this.socketIo.startTyping({userName: this.userDetails.userName});
      }
      if (this.msg.msg.substr(0, 3) === '/pm') {
        this.msg.private = true;
      }
    } else {
      this.socketIo.clearTyping();
      this.msg.private = false;
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

  onPm(receiver: string) {
    this.msg.msg = `/pm ${receiver} `;
    this.msg.private = true;
    this.msgInput.nativeElement.focus();
  }
}
