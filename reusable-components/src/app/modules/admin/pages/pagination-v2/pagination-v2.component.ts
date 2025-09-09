import { Component } from '@angular/core';
import { PaginationV2Component } from '../../../../shared/pagination-v2/pagination-v2.component';

@Component({
  selector: 'app-pagination-v2-page',
  imports: [PaginationV2Component],
  templateUrl: './pagination-v2.component.html',
  styleUrl: './pagination-v2.component.scss',
})
export class PaginationV2Page {
  recordsPerPage: number[] = [10, 20, 25];
  activePage: number = 1;
}
