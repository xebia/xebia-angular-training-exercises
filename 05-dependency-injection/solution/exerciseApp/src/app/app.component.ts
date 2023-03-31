import { Component } from '@angular/core';
import { PowerService } from './power.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PowerService],
})
export class AppComponent {
  title = 'exerciseApp';
}
