import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperV1Component } from './stepper-v1.component';

describe('StepperV1Component', () => {
  let component: StepperV1Component;
  let fixture: ComponentFixture<StepperV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperV1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
