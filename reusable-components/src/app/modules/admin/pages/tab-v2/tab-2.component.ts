import { Component, signal } from '@angular/core';
import { Tab2Component } from '../../../../shared/tab-v2/tab-2.component';
import { TabInfo } from '../../../../shared/model/tab-info.interface';
import { TemplateMetaDataDirective } from '../../../../shared/directives/template-meta-data.directive';

@Component({
  selector: 'app-tab-2-page',
  imports: [Tab2Component, TemplateMetaDataDirective],
  templateUrl: './tab-2.component.html',
  styleUrl: './tab-2.component.scss',
})
export class Tab2Page {
  tabMetaData = signal<TabInfo[]>([
    {
      heading: 'Tab 1',
      key: 'tab1',
    },
    {
      heading: 'Tab 2',
      key: 'tab2',
    },
    {
      heading: 'Tab 3',
      key: 'tab3',
    },
  ]);

  activeTab = signal('tab2');
}
