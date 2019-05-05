import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/services';
import { Room } from 'src/app/models';

@Component({
  selector: 'app-room-modal',
  templateUrl: './add-room-modal.component.html',
  styleUrls: ['./add-room-modal.component.scss']
})
export class RoomModalComponent implements OnInit {

  @ViewChild('closeModal') closeBtn: ElementRef;
  room: Room;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.room = {
      roomName: '',
    };
  }

  saveRoom() {
    this.apiService.saveRoom(this.room).subscribe(() => {
      this.closeBtn.nativeElement.click();
    });
  }
}
