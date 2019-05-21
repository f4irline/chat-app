import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService, ApiService } from '../../services';

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
      () => this.handleSuccess(),
      () => this.handleError(),
    );
  }

  handleSuccess() {
    this.router.navigateByUrl('/login');
  }

  login() {
    this.router.navigateByUrl('/login');
  }

  handleError() {
    this.signupFailed = true;
    setTimeout(() => {
      this.signupFailed = false;
    }, 3000);
  }
}
