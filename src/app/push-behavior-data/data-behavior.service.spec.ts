import { TestBed, inject } from '@angular/core/testing';

import { DataBehaviorService } from './data-behavior.service';

describe('DataBehaviorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataBehaviorService]
    });
  });

  it('should be created', inject([DataBehaviorService], (service: DataBehaviorService) => {
    expect(service).toBeTruthy();
  }));
});
