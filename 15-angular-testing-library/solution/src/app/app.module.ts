import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CounterComponent } from './01-counter/counter.component';
import { WithProviderComponent } from './02-with-provider/with-provider.component';
import { WithContentComponent } from './03-with-content/with-content.component';
import { ScoreFormComponent } from './04-score-form/score-form.component';
import { AsyncLoadComponent } from './05-async-load/async-load.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    WithProviderComponent,
    WithContentComponent,
    ScoreFormComponent,
    AsyncLoadComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
