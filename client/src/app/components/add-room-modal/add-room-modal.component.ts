import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
  EventEmitter,
  ElementRef,
  Output,
} from '@angular/core';

import { Fade } from '../../animations/Fade';
import { Room } from '../../models';
import { ApiService } from '../../services';

@Component({
  selector: 'app-room-modal',
  templateUrl: './add-room-modal.component.html',
  styleUrls: ['./add-room-modal.component.scss'],
  animations: [
    Fade,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomModalComponent implements OnInit {

  @ViewChild('closeModal', { static: true }) closeBtn: ElementRef;
  room: Room;

  @Output() joinRoom = new EventEmitter<number>();

  addFailed = false;
  errorTimeout: number;

  constructor(
    private apiService: ApiService,
    private ref: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.room = {
      roomName: '',
    };
  }

  saveRoom() {
    this.apiService.saveRoom(this.room).subscribe(
      (room) => this.handleSuccess(room),
      (err) => this.handleError(err),
    );
  }

  handleSuccess(room: Room) {
    this.room.roomName = '';
    this.joinRoom.emit(room.id);
    this.closeBtn.nativeElement.click();
  }

  handleError(err) {
    this.addFailed = true;
    this.ref.markForCheck();

    if (this.errorTimeout) {
      window.clearTimeout(this.errorTimeout);
    }

    this.errorTimeout = window.setTimeout(() => {
      this.addFailed = false;
      this.errorTimeout = undefined;
      this.ref.markForCheck();
    }, 4000);
  }
}
