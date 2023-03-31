import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mouse-observer',
  templateUrl: './mouse-observer.component.html',
  styleUrls: ['./mouse-observer.component.css'],
})
export class MouseObserverComponent implements AfterViewInit {
  @ViewChild('area') areaEl!: ElementRef;

  x$!: Observable<number>;
  y$!: Observable<number>;
  pointer$!: Observable<object>;

  ngAfterViewInit() {
    // TODO create an observable from the 'mousemove' event on areaEl
    // TODO pipe map each offsetX mousemove event to this.x$
    // TODO pipe map each offsetY mousemove event to this.y$
    // TODO combine the latest x$ and y$ values to top/left styles in this.pointerStyle$
  }
}
