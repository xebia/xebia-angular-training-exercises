import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoItAllComponent } from './do-it-all.component';

describe('DoItAllComponent', () => {
  let component: DoItAllComponent;
  let fixture: ComponentFixture<DoItAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoItAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoItAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
