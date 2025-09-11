import { Component, input } from '@angular/core';
import { TableMetaData } from '../model/table-metaData.interface';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  metaData = input.required<TableMetaData[]>();
  data = input.required<any[]>();
  tableMargin = input<string>('10px');
}
