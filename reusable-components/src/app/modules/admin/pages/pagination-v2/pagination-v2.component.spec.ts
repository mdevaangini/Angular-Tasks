import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationV2Component } from './pagination-v2.component';

describe('PaginationV2Component', () => {
  let component: PaginationV2Component;
  let fixture: ComponentFixture<PaginationV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationV2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
