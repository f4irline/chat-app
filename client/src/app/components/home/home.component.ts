import { Component, OnInit } from '@angular/core';
import { LocalStorageService, SocketIoService, ApiService } from '../../services';
import { Router } from '@angular/router';
import { Room, User } from 'src/app/models';
import { UserDetails } from 'src/app/models/UserDetails';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userDetails: UserDetails;
  rooms: Room[];

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private socketIo: SocketIoService,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.apiService.profile().subscribe(
      res => this.profileSuccess(res),
      err => this.profileError(err),
    );
  }

  profileSuccess(res: User) {
    this.userDetails = {
      userName: res.userName,
      room: this.localStorageService.getRoom()
    };
    this.socketIo.join(this.userDetails);
  }

  profileError(err: any) {
    this.localStorageService.removeToken();
    this.localStorageService.removeUserName();
    this.router.navigateByUrl('/login');
  }

  logout() {
    this.socketIo.disconnect();
    this.localStorageService.emptyLocalStorage();
    this.router.navigateByUrl('/');
  }

  getRooms() {
    this.apiService.getRooms().subscribe((rooms) => {
      this.rooms = rooms;
    });
  }
}
