import { NgTemplateOutlet } from '@angular/common';
import {
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
})
export class TableColumnComponent {
  columnTemplate = contentChildren(TemplateRef<any>);
  column = input<string>();
  rowData = input<any>();
}
