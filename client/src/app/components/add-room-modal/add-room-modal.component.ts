import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService, LocalStorageService, SocketIoService } from 'src/app/services';
import { Room } from 'src/app/models';

@Component({
  selector: 'app-room-modal',
  templateUrl: './add-room-modal.component.html',
  styleUrls: ['./add-room-modal.component.scss']
})
export class RoomModalComponent implements OnInit {

  @ViewChild('closeModal') closeBtn: ElementRef;
  room: Room;

  constructor(
    private apiService: ApiService,
    private localStorageService: LocalStorageService,
    private socketIo: SocketIoService,
    ) { }

  ngOnInit() {
    this.room = {
      roomName: '',
    };
  }

  saveRoom() {
    this.apiService.saveRoom(this.room).subscribe((room) => {
      this.joinRoom(room.id);
    });
  }

  joinRoom(id: number) {
    this.localStorageService.setRoom(id);
    this.socketIo.join({
      userName: this.localStorageService.getUserName(),
      room: id.toString(),
    });
    this.closeBtn.nativeElement.click();
  }
}
