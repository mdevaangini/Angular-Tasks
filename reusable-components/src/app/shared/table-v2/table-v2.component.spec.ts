import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableV2Component } from './table-v2.component';

describe('TableV2Component', () => {
  let component: TableV2Component;
  let fixture: ComponentFixture<TableV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableV2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
