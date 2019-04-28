import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
  ) {}
  canActivate(): boolean {
    if (this.localStorageService.getUserName()) {
      return true;
    } else {
      this.router.navigateByUrl('/');
      return false;
    }
  }
}
