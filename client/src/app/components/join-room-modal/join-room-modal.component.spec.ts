import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinRoomModalComponent } from './join-room-modal.component';

describe('JoinRoomModalComponent', () => {
  let component: JoinRoomModalComponent;
  let fixture: ComponentFixture<JoinRoomModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinRoomModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinRoomModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
