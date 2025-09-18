import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
  input,
  model,
  signal,
  TemplateRef,
} from '@angular/core';
import { TemplateMetaDataDirective } from '../directives/template-meta-data.directive';

@Component({
  selector: 'dm-tabs',
  imports: [NgTemplateOutlet],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent {
  tabs = contentChildren(TemplateMetaDataDirective);
  template = signal<TemplateRef<any> | null>(null);

  activeTab = input<string>();

  ngAfterContentInit() {
    const active = this.tabs().find(
      (t) => t.templateMetaData() === this.activeTab()
    );
    this.template.set(active?.template ?? null);
  }

  onClickTab(tab: TemplateMetaDataDirective) {
    this.template.set(tab.template);
  }
}
