import { TestBed, inject } from '@angular/core/testing';

import { TypeActiviteService } from './type-activite.service';

describe('TypeActiviteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeActiviteService]
    });
  });

  it('should be created', inject([TypeActiviteService], (service: TypeActiviteService) => {
    expect(service).toBeTruthy();
  }));
});
