import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceGuessComponent } from './dice-guess.component';

describe('DiceGuessComponent', () => {
  let component: DiceGuessComponent;
  let fixture: ComponentFixture<DiceGuessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiceGuessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiceGuessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
