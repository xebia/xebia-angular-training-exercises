import { Component, Input } from '@angular/core';
import { Item } from '../item.type';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() item!: Item;
  @Input() index!: number;
}
