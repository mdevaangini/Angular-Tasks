import {
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
import { NgTemplateOutlet } from '@angular/common';
import { TemplateMetaDataComponent } from '../../modules/admin/components/template-meta-data/template-meta-data.component';
import { NgComponentOutlet } from '../../../../node_modules/@angular/common/common_module.d-NEF7UaHr';

@Component({
  selector: 'app-table-v2',
  imports: [NgTemplateOutlet, NgComponentOutlet],
  templateUrl: './table-v2.component.html',
  styleUrl: './table-v2.component.scss',
})
export class TableV2Component {
  metaData = input.required<TableMetaData[]>();
  data = input.required<any[]>();
  sort = model<sortInfo>();
  tableMargin = input<string>('10px');

  columnTemplates = contentChildren(TemplateMetaDataDirective);

  columnComponent = contentChildren(TemplateMetaDataComponent);

  onClick(col: any, order: 'asc' | 'desc') {
    this.sort.set({
      sortDirection: order,
      sortKey: col.field,
    });
  }

  findTemplate(field: any) {
    return this.columnTemplates().find((i) => i.templateMetaData() === field);
  }

  findComponent(field: any) {
    return this.columnComponent().find((i) => i.column() === field);
  }
}
