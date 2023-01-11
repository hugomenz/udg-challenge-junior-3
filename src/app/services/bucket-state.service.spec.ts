import { TestBed } from '@angular/core/testing';

import { BucketStateService } from './bucket-state.service';

describe('BucketStateService', () => {
  let service: BucketStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BucketStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
