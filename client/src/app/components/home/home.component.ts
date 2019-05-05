import { Component, OnInit } from '@angular/core';
import { LocalStorageService, SocketIoService, ApiService } from '../../services';
import { Router } from '@angular/router';
import { Room } from 'src/app/models';
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
    this.userDetails = {
      userName: this.localStorageService.getUserName(),
      room: this.localStorageService.getRoom(),
    };
    this.socketIo.join(this.userDetails);
  }

  logout() {
    this.socketIo.disconnect();
    this.localStorageService.removeUserName();
    this.router.navigateByUrl('/');
  }

  getRooms() {
    this.apiService.getRooms().subscribe((rooms) => {
      this.rooms = rooms;
    });
  }
}
