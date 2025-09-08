import { Component } from '@angular/core';
import { PaginationComponent } from '../pagination-v1/pagination.component';
import { PaginationV2Component } from '../pagination-v2/pagination-v2.component';

@Component({
  selector: 'app-table',
  imports: [PaginationComponent, PaginationV2Component],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  //for pagination v2
  recordsPerPage: number[] = [10, 20, 25];
  activePage: number = 1;
}
