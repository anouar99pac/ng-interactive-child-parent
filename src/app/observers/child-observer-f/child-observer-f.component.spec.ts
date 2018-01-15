import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildObserverFComponent } from './child-observer-f.component';

describe('ChildObserverFComponent', () => {
  let component: ChildObserverFComponent;
  let fixture: ComponentFixture<ChildObserverFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildObserverFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildObserverFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
