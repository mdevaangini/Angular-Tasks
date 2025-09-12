import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableV1Page } from './table.component';

describe('TableComponent', () => {
  let component: TableV1Page;
  let fixture: ComponentFixture<TableV1Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableV1Page],
    }).compileComponents();

    fixture = TestBed.createComponent(TableV1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
