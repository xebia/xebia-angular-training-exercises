import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyOrNotComponent } from './happy-or-not.component';

describe('HappyOrNotComponent', () => {
  let component: HappyOrNotComponent;
  let fixture: ComponentFixture<HappyOrNotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HappyOrNotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HappyOrNotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
