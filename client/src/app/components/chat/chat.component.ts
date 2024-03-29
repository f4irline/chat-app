import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Fade } from '../../animations/Fade';
import { Message, Room, Typing, User, UserDetails } from '../../models/';
import { SocketIoService } from '../../services';
import { AppState } from '../../store';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  animations: [
    Fade,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatComponent implements OnInit, AfterViewChecked, OnDestroy {

  @ViewChild('msgInput', { static: true }) msgInput: ElementRef;
  @ViewChild('pmInput', { static: true }) pmInput: ElementRef;

  whoisTyping: Typing;
  msg: Message;
  messages: Message[];
  room: Room;
  receiverError: boolean;

  userDetails: UserDetails;

  errorString: string;

  errorTimeout: number;

  userDetailsSubscription: Subscription;
  msgSubscription$: Subscription;
  clearSubscription$: Subscription;
  typingSubscription$: Subscription;
  roomSubscription$: Subscription;
  noReceiverSubscription$: Subscription;
  invalidReceiverSubscription$: Subscription;

  constructor(
    private socketIo: SocketIoService,
    private store: Store<AppState>,
    private ref: ChangeDetectorRef,
  ) {
    this.msg = {
      userName: '',
      msg: '',
      private: false,
      receiver: undefined
    };

    this.whoisTyping = {
      userName: undefined,
    };

    this.room = {
      roomName: undefined,
    };

    this.userDetailsSubscription = this.store.select('userDetails').subscribe((details) => {
      this.userDetails = details;
      this.msg.userName = details.userName;
      this.ref.markForCheck();
    });
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
    this.roomSubscription$.unsubscribe();
    this.noReceiverSubscription$.unsubscribe();
    this.invalidReceiverSubscription$.unsubscribe();
    this.userDetailsSubscription.unsubscribe();

    if (this.errorTimeout) {
      window.clearTimeout(this.errorTimeout);
    }
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  ngOnInit() {
    this.scrollToBottom();

    this.msgSubscription$ = this.socketIo.message.subscribe((msg) => {
      this.messages.push(msg);
      this.ref.markForCheck();
    });

    this.clearSubscription$ = this.socketIo.clear.subscribe(() => {
      this.whoisTyping = {
        userName: undefined,
      };
      this.ref.markForCheck();
    });

    this.typingSubscription$ = this.socketIo.typing.subscribe((user) => {
      this.whoisTyping = user;
      this.ref.markForCheck();
    });

    this.roomSubscription$ = this.socketIo.room.subscribe((room) => {
      this.room = room;
      this.messages = room.messages;
      this.ref.markForCheck();
    });

    this.noReceiverSubscription$ = this.socketIo.noReceiver.subscribe((msg) => {
      this.displayError('No user with given name found.');
    });

    this.invalidReceiverSubscription$ = this.socketIo.invalidReceiver.subscribe((msg) => {
      this.displayError('Invalid receiver (do not send to self.)');
    });
  }

  displayError(msg: string) {
    this.errorString = msg;
    this.receiverError = true;
    this.ref.markForCheck();

    if (this.errorTimeout) {
      window.clearTimeout(this.errorTimeout);
    }

    this.errorTimeout = window.setTimeout(() => {
      this.receiverError = false;
      this.errorTimeout = undefined;
      this.ref.markForCheck();
    }, 4000);
  }

  msgChanged(event: any) {
    this.msg.msg = event;

    if (this.msg.msg.length > 0) {
      if (this.msg.msg[0] !== '/') {
        if (!this.msg.private) {
          this.socketIo.startTyping({ userName: this.userDetails.userName });
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
    this.msg.msg = '';
    setTimeout(() => {
      this.msgInput.nativeElement.focus();
    });
  }

  onPm(receiver: string) {
    this.msg.private = true;
    this.msg.receiver = receiver;
    this.msg.msg = '';
    setTimeout(() => {
      this.pmInput.nativeElement.focus();
    });
  }
}
