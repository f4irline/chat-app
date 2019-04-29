import { Component, OnInit } from '@angular/core';
import { LocalStorageService, SocketIoService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userName = '';

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private socketIo: SocketIoService,
  ) { }

  ngOnInit() {
    this.userName = this.localStorageService.getUserName();
  }

  logout() {
    this.socketIo.disconnect();
    this.localStorageService.removeUserName();
    this.router.navigateByUrl('/');
  }
}
