import { TestBed } from '@angular/core/testing';

import { MantEvolutivosService } from './mant-evolutivos.service';

describe('MantEvolutivosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MantEvolutivosService = TestBed.get(MantEvolutivosService);
    expect(service).toBeTruthy();
  });
});
