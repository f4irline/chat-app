import { Component, OnInit, Input, AfterViewChecked, OnDestroy, ViewChild, ElementRef, HostListener } from '@angular/core';
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
  @ViewChild('pmInput') pmInput: ElementRef;

  whoisTyping: Typing;
  msg: Message;
  messages: Message[];
  room: Room;
  users: User[];
  receiverError: boolean;

  errorString: string;

  errorTimeout: number;

  msgSubscription$: Subscription;
  clearSubscription$: Subscription;
  typingSubscription$: Subscription;
  usersSubscription$: Subscription;
  roomSubscription$: Subscription;
  noReceiverSubscription$: Subscription;
  invalidReceiverSubscription$: Subscription;

  constructor(private socketIo: SocketIoService) {
    this.msg = {
      userName: '',
      msg: '',
      private: false,
      receiver: undefined
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

  @HostListener('document:keydown', ['$event'])
  onkeydown(event: KeyboardEvent) {
    switch (event.key) {
      case 'Escape':
        this.msg.private = false;
        break;
      case 'Enter':
        this.send();
        break;
      default:
        break;
    }
  }

  ngOnDestroy() {
    this.msgSubscription$.unsubscribe();
    this.clearSubscription$.unsubscribe();
    this.typingSubscription$.unsubscribe();
    this.usersSubscription$.unsubscribe();
    this.roomSubscription$.unsubscribe();
    this.noReceiverSubscription$.unsubscribe();
    this.invalidReceiverSubscription$.unsubscribe();

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
      this.messages = room.messages;
    });

    this.noReceiverSubscription$ = this.socketIo.noReceiver.subscribe((msg) => {
      this.errorString = 'No user with given name found.';
      this.receiverError = true;

      if (this.errorTimeout) {
        window.clearTimeout(this.errorTimeout);
      }

      this.errorTimeout = window.setTimeout(() => {
        this.receiverError = false;
        this.errorTimeout = undefined;
      }, 4000);
    });

    this.invalidReceiverSubscription$ = this.socketIo.invalidReceiver.subscribe((msg) => {
      this.errorString = 'Invalid receiver (do not send to self).';
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

    if (this.msg.msg.length > 0) {
      if (this.msg.msg[0] !== '/') {
        if (!this.msg.private) {
          this.socketIo.startTyping({userName: this.userDetails.userName});
        }
      } else {
        this.checkMessageForPm();
      }
    } else {
      this.socketIo.clearTyping();
    }
  }

  checkMessageForPm() {
    const receiver = this.msg.msg.slice(4);
    if (receiver[receiver.length - 1] === ' ') {
      this.onPm(receiver.slice(0, receiver.length - 1));
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

  endPm() {
    this.msg.private = false;
    this.msg.receiver = undefined;
  }

  onPm(receiver: string) {
    this.msg.msg = '';
    this.msg.private = true;
    this.msg.receiver = receiver;
    setTimeout(() => {
      this.pmInput.nativeElement.focus();
    });
  }
}
