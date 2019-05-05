import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from 'src/app/models/Message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() msg: Message;
  @Input() userName: string;
  @Output() pm = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  startPm(msg: Message) {
    this.pm.emit(msg.userName);
  }
}
