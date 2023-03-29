import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DiceGuessComponent } from './dice-guess/dice-guess.component';

@NgModule({
  declarations: [
    AppComponent,
    DiceGuessComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
