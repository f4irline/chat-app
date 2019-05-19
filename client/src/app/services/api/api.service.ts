import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room, User } from 'src/app/models';
import { Observable } from 'rxjs';
import { Auth } from 'src/app/models/Auth';
import { Token } from '../../models/Token';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api = 'https://gentle-mesa-55326.herokuapp.com/api';

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
