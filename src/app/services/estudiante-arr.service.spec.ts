import { TestBed } from '@angular/core/testing';

import { EstudianteArrService } from './estudiante-arr.service';

describe('EstudianteArrService', () => {
  let service: EstudianteArrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstudianteArrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
