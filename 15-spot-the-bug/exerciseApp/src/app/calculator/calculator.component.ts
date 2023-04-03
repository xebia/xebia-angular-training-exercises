import { Component } from '@angular/core';
import { CalculationService } from './calculation.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  providers: [CalculationService],
})
export class CalculatorComponent {
  constructor(public calculationService: CalculationService) {}
}
