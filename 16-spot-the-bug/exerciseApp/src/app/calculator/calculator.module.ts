import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { CalculatorComponent } from './calculator.component';
import { NumberButtonComponent } from './number-button/number-button.component';

@NgModule({
  declarations: [CalculatorComponent, NumberButtonComponent],
  imports: [CommonModule, CalculatorRoutingModule],
})
export class CalculatorModule {}
