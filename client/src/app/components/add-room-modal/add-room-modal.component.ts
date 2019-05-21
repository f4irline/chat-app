import {
  Component,
  OnInit,
  ViewChild,
  EventEmitter,
  ElementRef,
  Output } from '@angular/core';

import { Room } from '../../models';
import { ApiService } from '../../services';

@Component({
  selector: 'app-room-modal',
  templateUrl: './add-room-modal.component.html',
  styleUrls: ['./add-room-modal.component.scss']
})
export class RoomModalComponent implements OnInit {

  @ViewChild('closeModal') closeBtn: ElementRef;
  room: Room;

  @Output() joinRoom = new EventEmitter<number>();

  constructor(
    private apiService: ApiService,
    ) { }

  ngOnInit() {
    this.room = {
      roomName: '',
    };
  }

  saveRoom() {
    this.apiService.saveRoom(this.room).subscribe((room) => {
      this.room.roomName = '';
      this.joinRoom.emit(room.id);
      this.closeBtn.nativeElement.click();
    });
  }
}
