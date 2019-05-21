import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LocalStorageService, ApiService } from '../../services';
import { Token } from '../../models/Token';
import { AppState } from '../../store';
import * as UserDetailsActions from '../../store/actions/user-details.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;

  loginFailed = false;
  errorString: string;

  constructor(
    private store: Store<AppState>,
    private localStorageService: LocalStorageService,
    private router: Router,
    private apiService: ApiService,
    ) { }

  ngOnInit() {
    if (this.localStorageService.getToken()) {
      this.router.navigateByUrl('/home');
    }
  }

  login() {
    this.apiService.login({userName: this.userName, password: this.password}).subscribe(
      (data) => this.handleLogin(data),
      (err) => this.handleError(err),
    );
  }


  handleLogin(data: Token) {
    this.localStorageService.setToken(data.token);
    this.store.dispatch(new UserDetailsActions.UpdateUsername(this.userName));
    this.router.navigateByUrl('/home');
  }

  handleError(err: any) {
    this.errorString = err.error.msg;
    this.loginFailed = true;
    setTimeout(() => {
      this.loginFailed = false;
    }, 3000);
  }

  signup() {
    this.router.navigateByUrl('/signup');
  }
}
