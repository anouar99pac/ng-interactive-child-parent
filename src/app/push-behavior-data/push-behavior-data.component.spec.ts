import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushBehaviorDataComponent } from './push-behavior-data.component';

describe('PushBehaviorDataComponent', () => {
  let component: PushBehaviorDataComponent;
  let fixture: ComponentFixture<PushBehaviorDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushBehaviorDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushBehaviorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
