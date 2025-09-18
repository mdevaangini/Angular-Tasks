import { Component, signal } from '@angular/core';
import { StepperInfo } from '../../../../shared/model/stepper-info.interface';
import { StepperV1Component } from '../../../../shared/stepper-v1/stepper-v1.component';
import { TemplateMetaDataDirective } from '../../../../shared/directives/template-meta-data.directive';

@Component({
  selector: 'app-stepper-v1-page',
  imports: [StepperV1Component, TemplateMetaDataDirective],
  templateUrl: './stepper-v1.component.html',
  styleUrl: './stepper-v1.component.scss',
})
export class StepperV1Page {
  stepperMetaData: StepperInfo[] = [
    { serialNumber: 1, heading: 'Header I', key: 'step1' },
    { serialNumber: 2, heading: 'Header II', key: 'step2' },
    { serialNumber: 3, heading: 'Header III', key: 'step3' },
  ];

  activeStep = signal<string>('step2');
}
