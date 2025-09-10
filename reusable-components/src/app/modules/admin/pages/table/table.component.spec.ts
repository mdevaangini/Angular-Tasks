import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePage } from './table.component';

describe('TableComponent', () => {
  let component: TablePage;
  let fixture: ComponentFixture<TablePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablePage],
    }).compileComponents();

    fixture = TestBed.createComponent(TablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
