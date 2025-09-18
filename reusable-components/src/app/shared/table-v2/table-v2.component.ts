import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChildren,
  effect,
  input,
  model,
  signal,
} from '@angular/core';
import { TableMetaData } from '../model/table-metaData.interface';
import { sortInfo } from '../model/sort-info.interface';
import { TemplateMetaDataDirective } from '../directives/template-meta-data.directive';
import { NgComponentOutlet, NgTemplateOutlet } from '@angular/common';
import { TableColumnComponent } from '../../modules/admin/pages/table-v2/components/table-column/table-column.component';

@Component({
  selector: 'dm-table-v2',
  imports: [NgTemplateOutlet],
  templateUrl: './table-v2.component.html',
  styleUrl: './table-v2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableV2Component {
  metaData = input.required<TableMetaData[]>();
  data = input.required<any[]>();
  sort = model<sortInfo>();
  tableMargin = input<string>('10px');
  columnTemplates = contentChildren(TemplateMetaDataDirective);
  columnComponent = contentChildren(TableColumnComponent);

  templateHashMap = signal<any>({});
  componentHashMap = signal<any>({});

  ngAfterContentInit() {
    this.columnTemplates().forEach((i: any) => {
      this.templateHashMap.update((j) => {
        return { ...j, [i.templateMetaData()]: i.template };
      });
    });
  }

  onClick(col: any, order: 'asc' | 'desc') {
    this.sort.set({
      sortDirection: order,
      sortKey: col.field,
    });
  }

  /*
Not good for performance: as it will run every time the UI renders

  findTemplate(field: any) {
    return this.columnTemplates().find((i) => i.templateMetaData() === field);
  }

  findComponent(field: string) {
    const cmp = this.columnComponent().find((i) => i.column() === field);
    return cmp ? TemplateMetaDataComponent : null;
  }
    */
}
