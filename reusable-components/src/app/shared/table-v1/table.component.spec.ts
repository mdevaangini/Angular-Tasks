import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableV1Component } from './table.component';

describe('TableComponent', () => {
  let component: TableV1Component;
  let fixture: ComponentFixture<TableV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableV1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(TableV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
