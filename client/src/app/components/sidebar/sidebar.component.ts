import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { User, UserDetails } from '../../models';
import { AppState } from '../../store';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() users: User;
  @Output() pm = new EventEmitter<string>();
  userDetails$: Observable<UserDetails>;

  constructor(
    private store: Store<AppState>,
  ) {
    this.userDetails$ = this.store.select('userDetails');
  }

  ngOnInit() {
  }

  startPm(user: User) {
    this.userDetails$.pipe(take(1)).subscribe((userDetails) => {
      if (userDetails.userName !== user.userName) {
        this.pm.emit(user.userName);
      }
    });
  }
}
