import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildObserverAComponent } from './child-observer-a.component';

describe('ChildObserverAComponent', () => {
  let component: ChildObserverAComponent;
  let fixture: ComponentFixture<ChildObserverAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildObserverAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildObserverAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
