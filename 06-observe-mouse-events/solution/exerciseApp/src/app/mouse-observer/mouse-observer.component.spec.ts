import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseObserverComponent } from './mouse-observer.component';

describe('MouseObserverComponent', () => {
  let component: MouseObserverComponent;
  let fixture: ComponentFixture<MouseObserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MouseObserverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MouseObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
