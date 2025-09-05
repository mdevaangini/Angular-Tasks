import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpNgContentComponent } from './pop-up-ng-content.component';

describe('PopUpNgContentComponent', () => {
  let component: PopUpNgContentComponent;
  let fixture: ComponentFixture<PopUpNgContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpNgContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpNgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
