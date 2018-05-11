import { TestBed, inject } from '@angular/core/testing';

import { EnfantService } from './enfant.service';

describe('EnfantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnfantService]
    });
  });

  it('should be created', inject([EnfantService], (service: EnfantService) => {
    expect(service).toBeTruthy();
  }));
});
