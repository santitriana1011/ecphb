import { TestBed } from '@angular/core/testing';

import { DsepdbService } from './dsepdb.service';

describe('DsepdbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DsepdbService = TestBed.get(DsepdbService);
    expect(service).toBeTruthy();
  });
});
