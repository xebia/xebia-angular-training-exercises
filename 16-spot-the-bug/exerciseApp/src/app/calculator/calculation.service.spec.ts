import { TestBed } from '@angular/core/testing';

import { CalculationService } from './calculation.service';

describe('CalculationService', () => {
  let service: CalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculationService],
    });
    service = TestBed.inject(CalculationService);
  });

  it('should push a new number', (done) => {
    service.push(1);
    service.display$.subscribe((val) => {
      expect(val).toBe(1);
      done();
    });
  });

  it('should push a second number', (done) => {
    service.push(1);
    service.push(2);
    service.display$.subscribe((val) => {
      expect(val).toBe(12);
      done();
    });
  });

  it('should add 2 numbers with plus', (done) => {
    service.push(1);
    service.plus();
    service.push(1);
    service.is();
    service.display$.subscribe((val) => {
      expect(val).toBe(2);
      done();
    });
  });
});
