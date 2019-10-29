import { TestBed } from '@angular/core/testing';

import { SucService } from './suc.service';

describe('SucService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SucService = TestBed.get(SucService);
    expect(service).toBeTruthy();
  });
});
