import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() users: User;
  @Output() pm = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  startPm(user: User) {
    this.pm.emit(user.userName);
  }
}
