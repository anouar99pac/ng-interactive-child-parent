import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildObserverEComponent } from './child-observer-e.component';

describe('ChildObserverEComponent', () => {
  let component: ChildObserverEComponent;
  let fixture: ComponentFixture<ChildObserverEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildObserverEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildObserverEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
