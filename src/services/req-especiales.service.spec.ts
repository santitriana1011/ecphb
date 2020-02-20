import { TestBed } from '@angular/core/testing';

import { ReqEspecialesService } from './req-especiales.service';

describe('ReqEspecialesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReqEspecialesService = TestBed.get(ReqEspecialesService);
    expect(service).toBeTruthy();
  });
});
