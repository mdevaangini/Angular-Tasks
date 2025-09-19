import {
  Component,
  contentChildren,
  input,
  signal,
  TemplateRef,
  viewChild,
} from '@angular/core';
import { TemplateMetaDataDirective } from '../directives/template-meta-data.directive';
import { TabInfo } from '../model/tab-info.interface';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'dm-tab-2',
  imports: [NgTemplateOutlet],
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
}
