import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingRoomComponent } from './living-room.component';

describe('LivingRoomComponent', () => {
  let component: LivingRoomComponent;
  let fixture: ComponentFixture<LivingRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivingRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivingRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
