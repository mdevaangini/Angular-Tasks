import {
  Component,
  computed,
  contentChildren,
  effect,
  input,
  model,
  signal,
} from '@angular/core';
import { TableColumnComponent } from '../../modules/admin/pages/table-v2/components/table-column/table-column.component';
import { TemplateMetaDataDirective } from '../directives/template-meta-data.directive';
import { sortInfo } from '../model/sort-info.interface';
import { TableMetaData } from '../model/table-metaData.interface';
import { NgComponentOutlet, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-table-with-pagination',
  imports: [NgTemplateOutlet, NgComponentOutlet],
  templateUrl: './table-with-pagination.component.html',
  styleUrl: './table-with-pagination.component.scss',
})
export class TableWithPaginationComponent {
  metaData = input.required<TableMetaData[]>();
  data = input.required<any[]>();
  sort = model<sortInfo>();
  tableMargin = input<string>('10px');
  pageFromPagination = input<any>(5);
  activePage = input<number>(1);

  columnTemplates = contentChildren(TemplateMetaDataDirective);
  columnComponent = contentChildren(TableColumnComponent);

  templateHashMap = signal<any>({});
  componentHashMap = signal<any>({});

  limitedData = computed(() => {
    const start = (this.activePage() - 1) * this.pageFromPagination();
    const end = +start + +this.pageFromPagination(); //Number conversion
    return this.data().slice(start, end);
  });

  ngAfterContentInit() {
    this.columnTemplates().forEach((i: any) => {
      this.templateHashMap.update((j) => {
        return { ...j, [i.templateMetaData()]: i.template };
      });
    });

    this.columnComponent().forEach((i: any) => {
      this.componentHashMap.update((j) => {
        return { ...j, [i.column()]: TableColumnComponent };
      });
    });
  }

  onClick(col: any, order: 'asc' | 'desc') {
    this.sort.set({
      sortDirection: order,
      sortKey: col.field,
    });
  }
}
