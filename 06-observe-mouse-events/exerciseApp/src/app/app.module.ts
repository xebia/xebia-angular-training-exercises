import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MouseObserverComponent } from './mouse-observer/mouse-observer.component';

@NgModule({
  declarations: [
    AppComponent,
    MouseObserverComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
