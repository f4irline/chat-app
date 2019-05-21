import { Component, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Room, UserDetails } from '../../models';
import { ApiService, LocalStorageService, SocketIoService } from '../../services';
import { AppState } from '../../store';
import * as UserDetailsActions from '../../store/actions/user-details.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnDestroy {

  userDetailsSubscription: Subscription;
  userDetails: UserDetails;
  rooms: Room[];

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private socketIo: SocketIoService,
    private apiService: ApiService,
    private store: Store<AppState>,
    private ref: ChangeDetectorRef,
  ) {
    this.userDetailsSubscription = this.store.select('userDetails').subscribe((details) => {
      this.userDetails = details;
      if (details.userName) {
        this.socketIo.join(details);
      }
      this.ref.markForCheck();
    });
  }

  ngOnDestroy() {
    this.userDetailsSubscription.unsubscribe();
  }

  logout() {
    this.socketIo.disconnect();
    this.store.dispatch(new UserDetailsActions.ResetDetails());
    this.localStorageService.removeToken();
    this.router.navigateByUrl('/');
  }

  getRooms() {
    this.apiService.getRooms().subscribe((rooms) => {
      this.rooms = rooms;
      this.ref.markForCheck();
    });
  }

  onJoinRoom(roomId: number) {
    this.store.dispatch(new UserDetailsActions.UpdateRoom(roomId));
    this.ref.markForCheck();
  }
}
