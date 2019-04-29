import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() users: User;

  constructor() { }

  ngOnInit() {
  }

}
