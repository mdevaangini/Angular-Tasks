import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'dm-pagination',
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  totalRecords = input.required<number>();
  recordsPerPage = input.required<number>();
  currentPage = input.required<number>();

  activeCount = signal<number>(0); //mainly to set currentPage , previous and next functionality

  totalCounts = computed(() => {
    let count = Math.ceil(this.totalRecords() / this.recordsPerPage());
    return [...Array(count).keys()].map((i) => i + 1);
  });

  constructor() {
    effect(() => {
      this.activeCount.set(this.currentPage());
    });
  }

  previous() {
    this.activeCount.update((c: number) => c - 1);
  }

  next() {
    this.activeCount.update((c: number) => c + 1);
  }

  onPageClick(count: number) {
    this.activeCount.set(count);
  }
}
