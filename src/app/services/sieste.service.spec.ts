import { TestBed, inject } from '@angular/core/testing';

import { SiesteService } from './sieste.service';

describe('SiesteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SiesteService]
    });
  });

  it('should be created', inject([SiesteService], (service: SiesteService) => {
    expect(service).toBeTruthy();
  }));
});
