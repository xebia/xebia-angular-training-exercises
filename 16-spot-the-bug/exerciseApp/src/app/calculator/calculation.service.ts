import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';

@Injectable()
export class CalculationService {
  private resultSubject = new BehaviorSubject(0);
  private currentSubject = new BehaviorSubject(0);

  display$ = combineLatest(
    [this.resultSubject, this.currentSubject],
    (result, current) => (current > 0 ? current : result)
  );

  push(num: number) {
    const current = String(this.currentSubject.getValue());
    this.currentSubject.next(Number(current + num));
  }

  plus() {
    this.resultSubject.next(
      this.resultSubject.getValue() + this.currentSubject.getValue()
    );
    this.currentSubject.next(0);
  }

  is() {
    this.plus();
    this.currentSubject.next(0);
  }

  clear() {
    this.resultSubject.next(0);
    this.currentSubject.next(0);
  }
}
