import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpNgTemplateOutletComponent } from './pop-up-ng-template-outlet.component';

describe('PopUpNgTemplateOutletComponent', () => {
  let component: PopUpNgTemplateOutletComponent;
  let fixture: ComponentFixture<PopUpNgTemplateOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpNgTemplateOutletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpNgTemplateOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
