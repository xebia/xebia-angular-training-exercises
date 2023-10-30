import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculationService } from './calculation.service';

import { CalculatorComponent } from './calculator.component';
import { NumberButtonComponent } from './number-button/number-button.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [CalculationService],
      declarations: [CalculatorComponent, NumberButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
