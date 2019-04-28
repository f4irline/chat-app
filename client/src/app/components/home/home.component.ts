import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
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
  ) { }

  ngOnInit() {
    this.userName = this.localStorageService.getUserName();
  }

  logout() {
    this.localStorageService.removeUserName();
    this.router.navigateByUrl('/');
  }
}
