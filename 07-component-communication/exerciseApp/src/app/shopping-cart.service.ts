import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private contentSubject = new BehaviorSubject<string[]>([]);

  content$ = this.contentSubject.asObservable();

  addToCart(item: string) {
    this.contentSubject.next([...this.contentSubject.getValue(), item]);
  }
  clearCart() {
    this.contentSubject.next([]);
  }
}
