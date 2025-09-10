import { Component, input } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  metaData = input.required<any[]>();
  data = input.required<any[]>();
  tableMargin = input<string>('10px');
}
