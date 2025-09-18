import {
  ChangeDetectionStrategy,
  Component,
  model,
  signal,
} from '@angular/core';
import { TemplateMetaDataDirective } from '../../../../shared/directives/template-meta-data.directive';
import { FormComponent } from './components/form/form.component';
import { TabsComponent } from '../../../../shared/tab-v1/tabs.component';

@Component({
  selector: 'app-tabs-page',
  imports: [TabsComponent, TemplateMetaDataDirective, FormComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsPage {
  activeTab = signal('Tab 2');
}
