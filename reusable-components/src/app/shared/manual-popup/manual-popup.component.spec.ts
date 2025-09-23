import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualPopupComponent } from './manual-popup.component';

describe('ManualPopupComponent', () => {
  let component: ManualPopupComponent;
  let fixture: ComponentFixture<ManualPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManualPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManualPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
