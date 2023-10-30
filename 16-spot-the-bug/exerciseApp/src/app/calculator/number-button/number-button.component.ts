import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-number-button',
  templateUrl: './number-button.component.html',
  styleUrls: ['./number-button.component.css'],
})
export class NumberButtonComponent {
  @Input() num!: number;
  @Output() pressed = new EventEmitter<number>();

  doEmit() {
    this.pressed.emit(this.num === 5 ? 10 : this.num);
  }
}
