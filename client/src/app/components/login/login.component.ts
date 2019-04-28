import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    ) { }

  ngOnInit() {
    if (this.localStorageService.getUserName()) {
      this.router.navigateByUrl('/home');
    }
  }

  login() {
    this.localStorageService.setUserName(this.userName);
    this.router.navigateByUrl('/home');
  }
}
