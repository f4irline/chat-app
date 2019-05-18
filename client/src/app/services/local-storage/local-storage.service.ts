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

  setRoom(room: number) {
    localStorage.setItem('room', room.toString());
  }

  getRoom() {
    return localStorage.getItem('room');
  }

  removeRoom() {
    if (localStorage.getItem('room')) {
      localStorage.removeItem('room');
    }
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  removeToken() {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
    }
  }
}
