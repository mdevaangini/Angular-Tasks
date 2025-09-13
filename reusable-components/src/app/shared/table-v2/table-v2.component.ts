import { Component, effect, input, model, signal } from '@angular/core';
import { TableMetaData } from '../model/table-metaData.interface';
import { sortInfo } from '../model/sort-info.interface';

@Component({
  selector: 'app-table-v2',
  imports: [],
  templateUrl: './table-v2.component.html',
  styleUrl: './table-v2.component.scss',
})
export class TableV2Component {
  metaData = input.required<TableMetaData[]>();
  data = input.required<any[]>();
  sort = model<sortInfo>();
  tableMargin = input<string>('10px');

  onClick(col: any, order: 'asc' | 'desc') {
    this.sort.set({
      sortDirection: order,
      sortKey: col.field,
    });
  }
}
