import { Component, OnInit } from '@angular/core';
import { LocalStorageService, ApiService } from '../../services';
import { Router } from '@angular/router';
import { Token } from 'src/app/models/Token';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  userName: string;
  password: string;

  signupFailed = false;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private apiService: ApiService,
    ) { }

  ngOnInit() {
    if (this.localStorageService.getToken()) {
      this.router.navigateByUrl('/home');
    }
  }

  signup() {
    this.apiService.signup({userName: this.userName, password: this.password}).subscribe(
      () => this.handleLogin(),
      () => this.handleError(),
    );
  }

  handleLogin() {
    this.router.navigateByUrl('/login');
  }

  handleError() {
    this.signupFailed = true;
    setTimeout(() => {
      this.signupFailed = false;
    }, 3000);
  }
}
