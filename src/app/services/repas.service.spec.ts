import { TestBed, inject } from '@angular/core/testing';

import { RepasService } from './repas.service';

describe('RepasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepasService]
    });
  });

  it('should be created', inject([RepasService], (service: RepasService) => {
    expect(service).toBeTruthy();
  }));
});
