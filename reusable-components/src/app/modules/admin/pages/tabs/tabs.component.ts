import {
  ChangeDetectionStrategy,
  Component,
  model,
  signal,
} from '@angular/core';
import { TemplateMetaDataDirective } from '../../../../shared/directives/template-meta-data.directive';
import { FormComponent } from './components/form/form.component';
import { FormV2Page } from '../form-v2/form-v2.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TabsComponent } from '../../../../shared/tab-v1/tabs.component';

@Component({
  selector: 'app-tabs-page',
  imports: [
    TabsComponent,
    TemplateMetaDataDirective,
    FormComponent,
    FormV2Page,
  ],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsPage {
  activeTab = signal('Tab 2');

  userFormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
  });
}
