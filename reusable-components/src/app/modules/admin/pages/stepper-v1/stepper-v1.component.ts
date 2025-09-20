import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { StepperInfo } from '../../../../shared/model/stepper-info.interface';
import { StepperV1Component } from '../../../../shared/stepper-v1/stepper-v1.component';
import { TemplateMetaDataDirective } from '../../../../shared/directives/template-meta-data.directive';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '../../../../../../node_modules/@angular/common/common_module.d-NEF7UaHr';

@Component({
  selector: 'app-stepper-v1-page',
  imports: [StepperV1Component, TemplateMetaDataDirective, ReactiveFormsModule],
  templateUrl: './stepper-v1.component.html',
  styleUrl: './stepper-v1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  activeStep = signal<string>('step1');

  email = new FormControl('', Validators.required);

  handlerNextStep1() {
    return this.email.valid;
  }

  handlerNextStep2() {
    return true;
  }
}
