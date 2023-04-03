import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberButtonComponent } from './number-button.component';

describe('NumberButtonComponent', () => {
  let component: NumberButtonComponent;
  let fixture: ComponentFixture<NumberButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumberButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NumberButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit num', (done) => {
    component.num = 1;
    component.pressed.subscribe((num) => {
      expect(num).toBe(1);
      done();
    });
    component.doEmit();
  });
});
