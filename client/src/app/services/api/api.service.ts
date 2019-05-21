import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auth, Token, Room, User } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api = 'http://localhost:3000/api';

  endpoints = {
    rooms: '/rooms',
    login: '/login',
    signup: '/signup',
    profile: '/profile',
  };

  constructor(private http: HttpClient) {
  }

  saveRoom(room: Room): Observable<Room> {
    return this.http.post<Room>(`${this.api}${this.endpoints.rooms}`, room);
  }

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.api}${this.endpoints.rooms}`);
  }

  login(auth: Auth): Observable<Token> {
    return this.http.post<Token>(`${this.api}${this.endpoints.login}`, auth);
  }

  profile(): Observable<User> {
    return this.http.get<User>(`${this.api}${this.endpoints.profile}`);
  }

  signup(auth: Auth) {
    return this.http.post<any>(`${this.api}${this.endpoints.signup}`, auth);
  }
}
