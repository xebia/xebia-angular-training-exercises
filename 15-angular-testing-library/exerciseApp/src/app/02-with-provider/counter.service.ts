import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private _value = 0;

  increment() {
    this._value += 1;
  }

  decrement() {
    this._value -= 1;
  }

  value() {
    return this._value;
  }
}
