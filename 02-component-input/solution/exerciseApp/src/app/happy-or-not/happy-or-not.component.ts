import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-happy-or-not',
  templateUrl: './happy-or-not.component.html',
  styleUrls: ['./happy-or-not.component.css'],
})
export class HappyOrNotComponent {
  @Input() name = '';
  @Input() happy = false;
}
