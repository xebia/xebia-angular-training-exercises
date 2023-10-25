import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { combineLatest, delay, filter, fromEvent, map, Observable } from 'rxjs';

@Component({
  selector: 'app-mouse-observer',
  templateUrl: './mouse-observer.component.html',
  styleUrls: ['./mouse-observer.component.css'],
})
export class MouseObserverComponent implements AfterViewInit {
  @ViewChild('area') areaEl!: ElementRef;

  x$!: Observable<number>;
  y$!: Observable<number>;
  pointerStyle$!: Observable<object>;

  ngAfterViewInit() {
    const mousemove$ = fromEvent<MouseEvent>(
      this.areaEl.nativeElement,
      'mousemove'
    );
    this.x$ = mousemove$.pipe(map((e) => e.offsetX));
    this.y$ = mousemove$.pipe(map((e) => e.offsetY));
    this.pointerStyle$ = combineLatest([this.x$, this.y$], (x, y) => ({
      top: y - 20 + 'px',
      left: x - 20 + 'px',
    }));
  }
}
