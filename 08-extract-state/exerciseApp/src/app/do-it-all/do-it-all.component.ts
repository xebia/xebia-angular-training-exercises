import { Component } from '@angular/core';
import { BehaviorSubject, interval, map } from 'rxjs';

@Component({
  selector: 'app-do-it-all',
  templateUrl: './do-it-all.component.html',
  styleUrls: ['./do-it-all.component.css'],
})
export class DoItAllComponent {
  // TODO move to TimeService
  time$ = interval(1000).pipe(map(() => Date.now()));

  // TODO move to CheckedService
  checked$ = new BehaviorSubject(false);

  // TODO move to CheckedService
  toggleChecked() {
    this.checked$.next(!this.checked$.getValue());
  }

  // TODO inject TimeService, CheckedService
}
