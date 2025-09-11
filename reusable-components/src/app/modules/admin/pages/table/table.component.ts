import { Component } from '@angular/core';
import { TableComponent } from '../../../../shared/table/table.component';
import { TableMetaData } from '../../../../shared/model/table-metaData.interface';

@Component({
  selector: 'app-table-page',
  imports: [TableComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TablePage {
  tableMetaData: TableMetaData[] = [
    { field: 'serialNumber', header: 'Serial Number', sortable: true },
    { field: 'firstName', header: 'First Name', sortable: true },
    { field: 'lastName', header: 'Last Name', sortable: true },
    { field: 'userHandle', header: 'Handle', sortable: false },
  ];

  tableData: any[] = [
    {
      serialNumber: 1,
      firstName: 'Devaangini',
      lastName: 'Mehta',
      userHandle: '@mdevaangini',
    },
    {
      serialNumber: 2,
      firstName: 'Ram',
      lastName: 'Sharma',
      userHandle: '@ramSharma',
    },
  ];
}
