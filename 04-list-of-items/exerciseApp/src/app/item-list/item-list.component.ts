import { Component } from '@angular/core';
import { Item } from '../item.type';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent {
  items: Item[] = [
    { id: 1, name: 'Boil water', done: true },
    { id: 4, name: 'Fill cup', done: false },
    { id: 7, name: 'Add tea bag', done: false },
    { id: 9, name: 'Remove tea bag', done: false },
    { id: 10, name: 'Add sugar', done: false },
    { id: 15, name: 'Stir', done: false },
  ];

  trackByItem(_: number, item: Item) {
    return item.id;
  }
}
