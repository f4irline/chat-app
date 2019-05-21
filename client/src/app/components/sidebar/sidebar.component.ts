import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy, OnInit, Output, EventEmitter, } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { User, UserDetails } from '../../models';
import { AppState } from '../../store';
import { SocketIoService } from '../../services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit, OnDestroy {
  @Output() pm = new EventEmitter<string>();

  usersSubscription$: Subscription;
  userDetails$: Observable<UserDetails>;
  users: User[];

  constructor(
    private store: Store<AppState>,
    private ref: ChangeDetectorRef,
    private socketIo: SocketIoService,
  ) {
    this.userDetails$ = this.store.select('userDetails');
  }

  ngOnDestroy() {
    this.usersSubscription$.unsubscribe();
  }

  ngOnInit() {
    this.usersSubscription$ = this.socketIo.users.subscribe((users) => {
      this.users = users;
      this.ref.markForCheck();
    });
  }

  startPm(user: User) {
    this.userDetails$.pipe(take(1)).subscribe((userDetails) => {
      if (userDetails.userName !== user.userName) {
        this.pm.emit(user.userName);
      }
    });
  }
}
