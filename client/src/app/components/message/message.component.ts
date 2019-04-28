import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/models/Message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() msg: Message;
  @Input() userName: string;

  constructor() { }

  ngOnInit() {
  }

}
