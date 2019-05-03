import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/services';
import { Room } from 'src/app/models';

@Component({
  selector: 'app-room-modal',
  templateUrl: './room-modal.component.html',
  styleUrls: ['./room-modal.component.scss']
})
export class RoomModalComponent implements OnInit {

  @ViewChild('closeModal') closeBtn: ElementRef;
  room: Room;

  @Output() newRooms = new EventEmitter<Room[]>();

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.room = {
      roomName: '',
    };
  }

  saveRoom() {
    this.apiService.saveRoom(this.room).subscribe((rooms) => {
      this.newRooms.emit(rooms);
      this.closeBtn.nativeElement.click();
    });
  }
}
