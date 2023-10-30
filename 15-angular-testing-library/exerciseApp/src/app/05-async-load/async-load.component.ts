import { Component, OnDestroy } from '@angular/core';
import { Subject, delay, filter, map } from 'rxjs';

@Component({
  selector: 'app-async-load',
  templateUrl: './async-load.component.html',
  styleUrls: ['./async-load.component.css']
})
export class AsyncLoadComponent implements OnDestroy {
  actions = new Subject<string>();
  data$ = this.actions.pipe(
    filter((x) => x === 'LOAD'),
    map(() => 'Loaded'),
    delay(3_000),
  );

  load() {
    this.actions.next('LOAD');
  }

  ngOnDestroy() {
    this.actions.complete();
  }
}