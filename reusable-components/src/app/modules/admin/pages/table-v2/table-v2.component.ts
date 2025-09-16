import { Component, computed, effect, signal } from '@angular/core';
import { TableMetaData } from '../../../../shared/model/table-metaData.interface';
import { TableV2Component } from '../../../../shared/table-v2/table-v2.component';
import { TemplateMetaDataDirective } from '../../../../shared/directives/template-meta-data.directive';
import { TableColumnComponent } from './components/table-column/table-column.component';

@Component({
  selector: 'app-table-v2-page',
  imports: [TableV2Component, TemplateMetaDataDirective, TableColumnComponent],
  templateUrl: './table-v2.component.html',
  styleUrl: './table-v2.component.scss',
})
export class TableV2Page {
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
    {
      serialNumber: 3,
      firstName: 'Harry',
      lastName: 'Potter',
      userHandle: '@harryPotter',
    },
  ];

  sort = signal({
    sortDirection: 'asc',
    sortKey: 'serialNumber',
  });

  constructor() {
    effect(() => {
      if (this.sort().sortDirection && this.sort().sortKey) {
        this.tableData.sort((a, b) => {
          const key = this.sort().sortKey;
          const dir = this.sort().sortDirection;
          const valA = a[key];
          const valB = b[key];

          if (typeof valA === 'string' && typeof valB === 'string') {
            return dir === 'asc'
              ? valA.localeCompare(valB)
              : valB.localeCompare(valA);
          }

          return dir === 'asc' ? valA - valB : valB - valA;
        });
      }
    });
  }
}
