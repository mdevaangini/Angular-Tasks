import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormV2Component } from './form-v2.component';

describe('FormV2Component', () => {
  let component: FormV2Component;
  let fixture: ComponentFixture<FormV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormV2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
