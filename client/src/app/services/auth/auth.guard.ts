import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ApiService } from '../api/api.service';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { User } from '../../models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/store';
import * as UserDetailsActions from '../../store/actions/user-details.action';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private apiService: ApiService,
    private store: Store<AppState>,
  ) {}

  canActivate(): Observable<boolean> {
    return this.checkLogin();
  }

  checkLogin(): Observable<boolean> {
    return this.apiService.profile().pipe(map(
      res => {
        return this.profileSuccess(res);
      },
      err => {
        return this.profileError(err);
      },
    ));

  }

  profileSuccess(res: User): boolean {
    this.store.dispatch(new UserDetailsActions.UpdateUsername(res.userName));
    return true;
  }

  profileError(err: any): boolean {
    this.localStorageService.removeToken();
    this.localStorageService.removeUserName();
    this.router.navigateByUrl('/');
    return false;
  }
}
