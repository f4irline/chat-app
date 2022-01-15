import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Room } from '../../models';

@Component({
  selector: 'app-join-room-modal',
  templateUrl: './join-room-modal.component.html',
  styleUrls: ['./join-room-modal.component.scss']
})
export class JoinRoomModalComponent implements OnInit {
  @Input() rooms: Room;
  @Output() joinRoom = new EventEmitter<number>();
  @ViewChild('closeModal', { static: true }) closeBtn: ElementRef;

  ngOnInit() {
  }

  join(id: number) {
    this.joinRoom.emit(id);
    this.closeBtn.nativeElement.click();
  }
}
