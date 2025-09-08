import {
  Component,
  computed,
  effect,
  input,
  model,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagination-v2',
  imports: [FormsModule],
  templateUrl: './pagination-v2.component.html',
  styleUrl: './pagination-v2.component.scss',
})
export class PaginationV2Component {
  totalRecords = input.required<number>();
  recordsPerPage = input.required<any[]>();
  page = model.required<number>();
  _count = signal<number>(10);

  totalCounts = computed(() => {
    let count = Math.ceil(this.totalRecords() / this.selectCount);
    return [...Array(count).keys()].map((i) => i + 1);
  });

  // [(ngModel)] can only bind to a property or a field
  get selectCount() {
    return this._count();
  }

  set selectCount(num: number) {
    this._count.set(num);
  }

  previous() {
    this.page.update((c: number) => c - 1);
  }

  next() {
    this.page.update((c: number) => c + 1);
  }

  onPageClick(count: number) {
    this.page.set(count);
  }
}
