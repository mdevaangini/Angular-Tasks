import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationV1Component } from './pagination-v1.component';

describe('PaginationV1Component', () => {
  let component: PaginationV1Component;
  let fixture: ComponentFixture<PaginationV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationV1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
