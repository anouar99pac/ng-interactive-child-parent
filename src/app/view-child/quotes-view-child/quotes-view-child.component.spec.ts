import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesViewChildComponent } from './quotes-view-child.component';

describe('QuotesViewChildComponent', () => {
  let component: QuotesViewChildComponent;
  let fixture: ComponentFixture<QuotesViewChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesViewChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
