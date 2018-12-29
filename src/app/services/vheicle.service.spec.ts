import { TestBed } from '@angular/core/testing';

import { VheicleService } from './vheicle.service';

describe('VheicleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VheicleService = TestBed.get(VheicleService);
    expect(service).toBeTruthy();
  });
});
