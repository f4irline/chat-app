import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from 'src/app/models/Message';
import { UserDetails } from 'src/app/models';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() msg: Message;
  @Input() userName: string;
  @Input() userDetails: UserDetails;
  @Output() pm = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  startPm(msg: Message) {
    if (this.userDetails.userName !== this.msg.userName) {
      this.pm.emit(msg.userName);
    }
  }
}
