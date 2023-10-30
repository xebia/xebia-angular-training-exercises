import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-with-provider',
  templateUrl: './with-provider.component.html',
  styleUrls: ['./with-provider.component.css']
})
export class WithProviderComponent {
  constructor(public counter: CounterService) { }
}
