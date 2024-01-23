import { TestBed } from '@angular/core/testing';

import { ImpresarService } from './impresar.service';

describe('ImpresarService', () => {
  let service: ImpresarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImpresarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
