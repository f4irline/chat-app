import { Component, OnInit } from '@angular/core';
import { LocalStorageService, SocketIoService, ApiService } from '../../services';
import { Router } from '@angular/router';
import { Room } from 'src/app/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userName = '';
  rooms: Room[];

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private socketIo: SocketIoService,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.userName = this.localStorageService.getUserName();
    this.apiService.getRooms().subscribe((rooms) => {
      this.rooms = rooms;
    });
  }

  logout() {
    this.socketIo.disconnect();
    this.localStorageService.removeUserName();
    this.router.navigateByUrl('/');
  }

  newRooms(rooms: Room[]) {
    this.rooms = rooms;
  }
}
