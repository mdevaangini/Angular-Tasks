import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  contentChild,
  contentChildren,
  effect,
  input,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-column',
  imports: [NgTemplateOutlet],
  templateUrl: './table-column.component.html',
  styleUrl: './table-column.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableColumnComponent {
  columnTemplate = contentChildren(TemplateRef<any>);
  rowData = input<any>();
  column = input<any>();
  colTemplate = input<TemplateRef<any> | null>(null);
}
