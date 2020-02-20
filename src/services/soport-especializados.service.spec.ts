import { TestBed } from '@angular/core/testing';

import { SoportEspecializadosService } from './soport-especializados.service';

describe('SoportEspecializadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SoportEspecializadosService = TestBed.get(SoportEspecializadosService);
    expect(service).toBeTruthy();
  });
});
