import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  model,
  output,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'dm-pagination-v2',
  imports: [FormsModule],
  templateUrl: './pagination-v2.component.html',
  styleUrl: './pagination-v2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationV2Component {
  totalRecords = input.required<number>();
  recordsPerPage = input<any[]>();
  page = model.required<number>();
  _count = signal<number>(5);
  selectedCount = output<number>();

  totalCounts = computed(() => {
    let count = Math.ceil(this.totalRecords() / this.selectCount);
    return [...Array(count).keys()].map((i) => i + 1);
  });

  // [(ngModel)] can only bind to a property or a field so made get set
  get selectCount() {
    return this._count();
  }

  set selectCount(num: number) {
    this.page.set(1);
    this._count.set(num);
    this.selectedCount.emit(this._count());
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
