import {
  Component,
  contentChildren,
  input,
  signal,
  TemplateRef,
} from '@angular/core';
import { StepperInfo } from '../model/stepper-info.interface';
import { CommonModule } from '@angular/common';
import { TemplateMetaDataDirective } from '../directives/template-meta-data.directive';

@Component({
  selector: 'dm-stepper-v1',
  imports: [CommonModule],
  templateUrl: './stepper-v1.component.html',
  styleUrl: './stepper-v1.component.scss',
})
export class StepperV1Component {
  stepsContent = contentChildren(TemplateMetaDataDirective);
  stepperMetaData = input.required<StepperInfo[]>();
  activeStep = input<string>();

  currentStep = signal<string | undefined>('');
  stepHashmap = new Map();
  stepTemplate = signal<TemplateRef<any> | null>(null);

  ngAfterContentInit() {
    this.stepsContent().forEach((step) => {
      this.stepHashmap.set(step.templateMetaData(), step.template);
    });

    if (this.activeStep() && this.stepHashmap.has(this.activeStep())) {
      this.currentStep.set(this.activeStep());
      this.stepTemplate.set(this.stepHashmap.get(this.activeStep()));
    }
  }

  onClick(step: any) {
    const temp = this.stepHashmap.get(step.key);
    this.stepTemplate.set(temp);
    this.currentStep.set(step.key);
  }

  prev() {
    const currentStep = this.stepperMetaData().find(
      (step) => step.key === this.currentStep()
    );

    if (currentStep) {
      const prevStep = this.stepperMetaData().find(
        (step) => step.serialNumber === currentStep.serialNumber - 1
      );
      this.currentStep.set(prevStep?.key);
      this.stepTemplate.set(this.stepHashmap.get(prevStep?.key));
    }
  }

  next() {
    const currentStep = this.stepperMetaData().find(
      (step) => step.key === this.currentStep()
    );

    if (currentStep) {
      const nextStep = this.stepperMetaData().find(
        (step) => step.serialNumber === currentStep.serialNumber + 1
      );
      this.currentStep.set(nextStep?.key);
      this.stepTemplate.set(this.stepHashmap.get(nextStep?.key));
    }
  }
}
