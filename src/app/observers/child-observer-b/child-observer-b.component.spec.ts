import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildObserverBComponent } from './child-observer-b.component';

describe('ChildObserverBComponent', () => {
  let component: ChildObserverBComponent;
  let fixture: ComponentFixture<ChildObserverBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildObserverBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildObserverBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
