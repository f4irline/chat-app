import { Component, OnInit } from '@angular/core';
import { LocalStorageService, ApiService } from '../../services';
import { Router } from '@angular/router';
import { Token } from 'src/app/models/Token';
import { User } from 'src/app/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;

  loginFailed = false;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private apiService: ApiService,
    ) { }

  ngOnInit() {
    if (this.localStorageService.getToken()) {
      this.apiService.profile().subscribe(
        (res) => {
        this.localStorageService.setUserName(res.userName);
        this.router.navigateByUrl('/home');
      });
    }
  }

  login() {
    this.apiService.login({userName: this.userName, password: this.password}).subscribe(
      (data) => this.handleLogin(data),
      () => this.handleError(),
    );
  }


  handleLogin(data: Token) {
    this.localStorageService.setToken(data.token);
    this.router.navigateByUrl('/home');
  }

  handleError() {
    this.loginFailed = true;
    setTimeout(() => {
      this.loginFailed = false;
    }, 3000);
  }

  signup() {
    this.router.navigateByUrl('/signup');
  }
}
