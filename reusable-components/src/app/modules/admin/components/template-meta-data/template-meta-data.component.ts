import { Component, input } from '@angular/core';

@Component({
  selector: 'app-template-meta-data',
  imports: [],
  templateUrl: './template-meta-data.component.html',
  styleUrl: './template-meta-data.component.scss',
})
export class TemplateMetaDataComponent {
  column = input<string>();
  rowData = input<any>();
}
