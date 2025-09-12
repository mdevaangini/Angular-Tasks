import { Component, input, model, signal } from '@angular/core';
import { TableMetaData } from '../model/table-metaData.interface';
import { sortColumn } from '../helpers/utils';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  metaData = input.required<TableMetaData[]>();
  data = input.required<any[]>();
  sortDirection = model<any[]>();
  tableMargin = input<string>('10px');
  intialData = signal<any[]>([]);

  ngOnInit() {
    this.intialData.set([...this.data()]);
    console.log(this.intialData());
  }

  ascending(col: any) {
    this.intialData.set(sortColumn(col, this.intialData(), 'asc'));
  }

  descending(col: any) {
    this.intialData.set(sortColumn(col, this.intialData(), 'desc'));
  }
}
