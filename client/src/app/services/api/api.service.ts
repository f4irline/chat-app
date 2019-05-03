import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from 'src/app/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  endpoints = {
    rooms: '/rooms',
  };

  constructor(private http: HttpClient) {
  }

  saveRoom(room: Room): Observable<Room[]> {
    return this.http.post<Room[]>(`http://localhost:3000/api${this.endpoints.rooms}`, room);
  }

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(`http://localhost:3000/api${this.endpoints.rooms}`);
  }
}
