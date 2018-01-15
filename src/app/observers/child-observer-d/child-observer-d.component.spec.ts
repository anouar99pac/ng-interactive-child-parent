import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildObserverDComponent } from './child-observer-d.component';

describe('ChildObserverDComponent', () => {
  let component: ChildObserverDComponent;
  let fixture: ComponentFixture<ChildObserverDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildObserverDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildObserverDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
