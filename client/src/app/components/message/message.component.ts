import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message, UserDetails } from '../../models';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() msg: Message;
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
