import { JsonPipe, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  contentChildren,
  inject,
  input,
  signal,
  TemplateRef,
  viewChild,
} from '@angular/core';
import { LoadingService } from '../../core/services/loading.service';
import { MockApiService } from '../../core/services/mock-api.service';
import { TemplateMetaDataDirective } from '../directives/template-meta-data.directive';
import { TabInfo } from '../model/tab-info.interface';

@Component({
  selector: 'dm-tab-2',
  imports: [NgTemplateOutlet,JsonPipe],
  templateUrl: './tab-2.component.html',
  styleUrl: './tab-2.component.scss',
})
export class Tab2Component {
  tabsContent = contentChildren(TemplateMetaDataDirective);
  activeTab = input<string>();
  tabMetaData = input.required<TabInfo[]>();
  tempHashMap = new Map();

  currentTemplate = signal<TemplateRef<any> | null>(null);
  currentTab = signal<string>('');
  defaultTemp = viewChild<TemplateRef<any> | undefined>('defaultTemp');

  ngAfterContentInit() {
    this.tabsContent().forEach((i) => {
      this.tempHashMap.set(i.templateMetaData(), i.template);
    });

    const initial = this.activeTab();
    if (initial && this.tempHashMap.has(initial)) {
      this.currentTab.set(initial);
      this.currentTemplate.set(this.tempHashMap.get(initial)!);
    }
  }

  onTabClick(tabKey: string) {
    this.currentTab.set(tabKey);

    const template = this.tempHashMap.get(tabKey);
    if (template) {
      this.currentTemplate.set(template);
    } else {
      this.currentTemplate.set(this.defaultTemp()!);
    }
  }

  mockService = inject(MockApiService);
  loadingService = inject(LoadingService);

  data = signal('');

  ngOnInit() {
    this.mockService.getAllJsonData().subscribe({
      next: (res: any) => this.data.set(res),
      error: (err) => console.log('Tab Components: ', err),
    });
  }
}
