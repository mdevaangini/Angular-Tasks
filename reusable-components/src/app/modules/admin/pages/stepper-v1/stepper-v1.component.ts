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
  stepperMetaData = signal<StepperInfo[]>([
    {
      serialNumber: 1,
      heading: 'Header I',
      key: 'step1',
      visited: false,
      handler: () => this.handlerNextStep1(),
    },
    {
      serialNumber: 2,
      heading: 'Header II',
      key: 'step2',
      visited: false,
      handler: () => this.handlerNextStep2(),
    },
    { serialNumber: 3, heading: 'Header III', key: 'step3', visited: false },
  ]);

  activeStep = signal<string>('step2');

  handlerNextStep1() {
    return true;
  }
  handlerNextStep2() {
    return false;
  }
}
