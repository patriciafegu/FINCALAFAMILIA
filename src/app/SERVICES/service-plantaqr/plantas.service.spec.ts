import { TestBed } from '@angular/core/testing';

import { AplantaService } from '../plantas.service';

describe('AplantaService', () => {
  let service: AplantaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AplantaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
