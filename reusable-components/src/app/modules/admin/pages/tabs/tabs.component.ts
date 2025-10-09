import {
  ChangeDetectionStrategy,
  Component,
  model,
  signal,
} from '@angular/core';
import { TemplateMetaDataDirective } from '../../../../shared/directives/template-meta-data.directive';
import { FormComponent } from './components/form/form.component';
import { FormV2Page } from '../form-v2/form-v2.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TabsComponent } from '../../../../shared/tab-v1/tabs.component';
import { JsonPipe, KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-tabs-page',
  imports: [
    TabsComponent,
    TemplateMetaDataDirective,
    FormComponent,
    FormV2Page,
    ReactiveFormsModule
  ],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsPage {
  activeTab = signal('Tab 2');


  formMetaData = {
    name: { type: 'text', placeholder: 'Name' },
    age: { type: 'number', placeholder: 'Age' },
    gender: { type: 'text',placeholder: 'Gender' },
    phoneNumber: { type: 'number',placeholder: 'Phone number' },
  }


  // userFormGroup = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   age: new FormControl('', Validators.required),
  //   gender: new FormControl('', Validators.required),
  //   phoneNumber: new FormControl('', Validators.required),
  // });

  getControlNames(inner:FormGroup){
    return Object.keys(inner.controls);
  }
}
