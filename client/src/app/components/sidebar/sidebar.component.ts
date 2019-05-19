import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User, UserDetails } from 'src/app/models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() users: User;
  @Input() userDetails: UserDetails;
  @Output() pm = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  startPm(user: User) {
    if (this.userDetails.userName !== user.userName) {
      this.pm.emit(user.userName);
    }
  }
}
