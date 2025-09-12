import { Component, input, model, signal } from '@angular/core';
import { TableMetaData } from '../model/table-metaData.interface';
import { sortColumnV1 } from '../helpers/utils';

@Component({
  selector: 'app-table-v1',
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableV1Component {
  metaData = input.required<TableMetaData[]>();
  data = input.required<any[]>();
  sortDirection = model<any[]>();
  tableMargin = input<string>('10px');
  intialData = signal<any[]>([]);

  ngOnInit() {
    this.intialData.set([...this.data()]);
  }

  ascending(col: any) {
    this.intialData.set(sortColumnV1(col, this.intialData(), 'asc'));
  }

  descending(col: any) {
    this.intialData.set(sortColumnV1(col, this.intialData(), 'desc'));
  }
}
