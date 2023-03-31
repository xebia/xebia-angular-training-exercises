import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CartListComponent,
    ShoppingItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
