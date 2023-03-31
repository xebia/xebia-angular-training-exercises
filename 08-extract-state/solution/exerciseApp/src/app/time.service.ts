import { Injectable } from '@angular/core';
import { interval, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  time$ = interval(1000).pipe(map(() => Date.now()));
}
