import { Component, computed, effect, signal } from '@angular/core';
import { TableMetaData } from '../../../../shared/model/table-metaData.interface';
import { TableWithPaginationComponent } from '../../../../shared/table-with-pagination/table-with-pagination.component';
import { PaginationV2Component } from '../../../../shared/pagination-v2/pagination-v2.component';

@Component({
  selector: 'app-table-with-pagination-page',
  imports: [TableWithPaginationComponent, PaginationV2Component],
  templateUrl: './table-with-pagination.component.html',
  styleUrl: './table-with-pagination.component.scss',
})
export class TableWithPaginationPage {
  tableMetaData: TableMetaData[] = [
    { field: 'serialNumber', header: 'Serial Number', sortable: true },
    { field: 'firstName', header: 'First Name', sortable: true },
    { field: 'lastName', header: 'Last Name', sortable: true },
    { field: 'userHandle', header: 'Handle', sortable: false },
  ];

  recordsPerPage: number[] = [5, 10, 20];
  activePage = signal<number>(1);
  pageFromPagination = signal<number>(5);

  tableData = signal<any[]>([
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
    {
      serialNumber: 4,
      firstName: 'Devaangini',
      lastName: 'Mehta',
      userHandle: '@mdevaangini',
    },
    {
      serialNumber: 5,
      firstName: 'Ram',
      lastName: 'Sharma',
      userHandle: '@ramSharma',
    },
    {
      serialNumber: 6,
      firstName: 'Harry',
      lastName: 'Potter',
      userHandle: '@harryPotter',
    },
    {
      serialNumber: 7,
      firstName: 'Devaangini',
      lastName: 'Mehta',
      userHandle: '@mdevaangini',
    },
    {
      serialNumber: 8,
      firstName: 'Ram',
      lastName: 'Sharma',
      userHandle: '@ramSharma',
    },
    {
      serialNumber: 9,
      firstName: 'Harry',
      lastName: 'Potter',
      userHandle: '@harryPotter',
    },
    {
      serialNumber: 10,
      firstName: 'Devaangini',
      lastName: 'Mehta',
      userHandle: '@mdevaangini',
    },
    {
      serialNumber: 11,
      firstName: 'Ram',
      lastName: 'Sharma',
      userHandle: '@ramSharma',
    },
    {
      serialNumber: 12,
      firstName: 'Harry',
      lastName: 'Potter',
      userHandle: '@harryPotter',
    },
    {
      serialNumber: 13,
      firstName: 'Devaangini',
      lastName: 'Mehta',
      userHandle: '@mdevaangini',
    },
    {
      serialNumber: 14,
      firstName: 'Ram',
      lastName: 'Sharma',
      userHandle: '@ramSharma',
    },
    {
      serialNumber: 15,
      firstName: 'Harry',
      lastName: 'Potter',
      userHandle: '@harryPotter',
    },
    {
      serialNumber: 16,
      firstName: 'Devaangini',
      lastName: 'Mehta',
      userHandle: '@mdevaangini',
    },
    {
      serialNumber: 17,
      firstName: 'Ram',
      lastName: 'Sharma',
      userHandle: '@ramSharma',
    },
    {
      serialNumber: 18,
      firstName: 'Harry',
      lastName: 'Potter',
      userHandle: '@harryPotter',
    },
    {
      serialNumber: 19,
      firstName: 'Devaangini',
      lastName: 'Mehta',
      userHandle: '@mdevaangini',
    },
    {
      serialNumber: 20,
      firstName: 'Ram',
      lastName: 'Sharma',
      userHandle: '@ramSharma',
    },
  ]);

  sort = signal({
    sortDirection: 'asc',
    sortKey: 'serialNumber',
  });

  sortedTableData = computed(() => {
    const data = this.tableData();
    const { sortKey: key, sortDirection: dir } = this.sort();

    if (!key || !dir) return data;

    return [...data].sort((a, b) => {
      const valA = a[key];
      const valB = b[key];

      if (typeof valA === 'string' && typeof valB === 'string') {
        return dir === 'asc'
          ? valA.localeCompare(valB)
          : valB.localeCompare(valA);
      }

      return dir === 'asc' ? valA - valB : valB - valA;
    });
  });

  readDataPerPage(event: any) {
    this.pageFromPagination.set(event);
  }
}

// browser was getting hangged
// constructor() {
//   effect(() => {
//     if (this.tableData && this.sort().sortDirection && this.sort().sortKey) {
//       this.tableData.set(
//         [...this.tableData()].sort((a, b) => {
//           const key = this.sort().sortKey;
//           const dir = this.sort().sortDirection;
//           const valA = a[key];
//           const valB = b[key];

//           if (typeof valA === 'string' && typeof valB === 'string') {
//             return dir === 'asc'
//               ? valA.localeCompare(valB)
//               : valB.localeCompare(valA);
//           }

//           return dir === 'asc' ? valA - valB : valB - valA;
//         })
//       );
//     }
//   });
// }
