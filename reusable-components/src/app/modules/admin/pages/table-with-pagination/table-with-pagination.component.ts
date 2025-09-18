import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { TableMetaData } from '../../../../shared/model/table-metaData.interface';
import { PaginationV2Component } from '../../../../shared/pagination-v2/pagination-v2.component';
import { TableDataService } from './service/table-data.service';
import { TableV2Component } from '../../../../shared/table-v2/table-v2.component';

@Component({
  selector: 'app-table-with-pagination-page',
  imports: [PaginationV2Component, TableV2Component],
  templateUrl: './table-with-pagination.component.html',
  styleUrl: './table-with-pagination.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TableDataService],
})
export class TableWithPaginationPage {
  tableService = inject(TableDataService);
  activePage = signal<number>(1);

  tableMetaData: TableMetaData[] = [
    { field: 'serialNumber', header: 'Serial Number', sortable: true },
    { field: 'firstName', header: 'First Name', sortable: true },
    { field: 'lastName', header: 'Last Name', sortable: true },
    { field: 'userHandle', header: 'Handle', sortable: false },
  ];

  readDataPerPage(count: number) {
    this.tableService.pageFromPagination.set(count);
  }

  changeSort(sort: { sortKey: string; sortDirection: 'asc' | 'desc' }) {
    this.tableService.sort.set(sort);
  }
}

// constructor() {
//   effect(() => {
//     if (this.sort().sortDirection && this.sort().sortKey) {
//       this.tableService.data.set(
//         [...this.tableService.data()].sort((a, b) => {
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
