import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckedService {
  checked$ = new BehaviorSubject(false);

  toggleChecked() {
    this.checked$.next(!this.checked$.getValue());
  }
}
