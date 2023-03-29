import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HappyOrNotComponent } from './happy-or-not/happy-or-not.component';

@NgModule({
  declarations: [AppComponent, HappyOrNotComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
