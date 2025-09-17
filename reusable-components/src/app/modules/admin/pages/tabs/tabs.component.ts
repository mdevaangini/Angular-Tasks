import { Component, model, signal } from '@angular/core';
import { TabsComponent } from '../../../../shared/tabs/tabs.component';
import { TemplateMetaDataDirective } from '../../../../shared/directives/template-meta-data.directive';
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-tabs-page',
  imports: [TabsComponent, TemplateMetaDataDirective, FormComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsPage {
  activeTab = signal('Tab 2');
}
