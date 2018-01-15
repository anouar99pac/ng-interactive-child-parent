import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildObserverCComponent } from './child-observer-c.component';

describe('ChildObserverCComponent', () => {
  let component: ChildObserverCComponent;
  let fixture: ComponentFixture<ChildObserverCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildObserverCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildObserverCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
