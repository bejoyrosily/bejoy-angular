import { TestBed } from '@angular/core/testing';

import { QtnService } from './qtn.service';

describe('QtnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QtnService = TestBed.get(QtnService);
    expect(service).toBeTruthy();
  });
});
