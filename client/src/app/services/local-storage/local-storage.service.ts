import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setUserName(userName: string) {
    localStorage.setItem('userName', userName);
  }

  getUserName() {
    return localStorage.getItem('userName');
  }

  removeUserName() {
    if (localStorage.getItem('userName')) {
      localStorage.removeItem('userName');
    }
  }
}
