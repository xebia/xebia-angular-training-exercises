import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css'],
})
export class ShoppingItemComponent {
  @Input() name!: string;

  // TODO inject the ShoppingCartService
  constructor() {}
}
