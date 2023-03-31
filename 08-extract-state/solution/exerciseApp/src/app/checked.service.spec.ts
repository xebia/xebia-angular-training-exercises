import { TestBed } from '@angular/core/testing';

import { CheckedService } from './checked.service';

describe('CheckedService', () => {
  let service: CheckedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
