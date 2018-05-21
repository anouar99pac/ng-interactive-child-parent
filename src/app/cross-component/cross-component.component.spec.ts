import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossComponentComponent } from './cross-component.component';

describe('CrossComponentComponent', () => {
  let component: CrossComponentComponent;
  let fixture: ComponentFixture<CrossComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrossComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
