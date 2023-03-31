import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DoItAllComponent } from './do-it-all/do-it-all.component';

@NgModule({
  declarations: [
    AppComponent,
    DoItAllComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
