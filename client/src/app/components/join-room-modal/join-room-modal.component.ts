import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Room } from 'src/app/models';
import { SocketIoService, LocalStorageService } from 'src/app/services';

@Component({
  selector: 'app-join-room-modal',
  templateUrl: './join-room-modal.component.html',
  styleUrls: ['./join-room-modal.component.scss']
})
export class JoinRoomModalComponent implements OnInit {
  @Input() rooms: Room;
  @ViewChild('closeModal') closeBtn: ElementRef;


  constructor(
    private socketIo: SocketIoService,
    private localStorageService: LocalStorageService
    ) { }

  ngOnInit() {
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
