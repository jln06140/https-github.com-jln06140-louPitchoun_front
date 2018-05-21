import { TestBed, inject } from '@angular/core/testing';

import { JourneeServiceService } from './journee-service.service';

describe('JourneeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JourneeServiceService]
    });
  });

  it('should be created', inject([JourneeServiceService], (service: JourneeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
