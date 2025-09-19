import {
  Component,
  contentChildren,
  input,
  model,
  signal,
  TemplateRef,
} from '@angular/core';
import { StepperInfo } from '../model/stepper-info.interface';
import { NgTemplateOutlet } from '@angular/common';
import { TemplateMetaDataDirective } from '../directives/template-meta-data.directive';

@Component({
  selector: 'dm-stepper-v1',
  imports: [NgTemplateOutlet],
  templateUrl: './stepper-v1.component.html',
  styleUrl: './stepper-v1.component.scss',
})
export class StepperV1Component {
  stepsContent = contentChildren(TemplateMetaDataDirective);
  stepperMetaData = model.required<StepperInfo[]>();
  activeStep = input<string>();

  currentStep = signal<string | undefined>('');
  stepHashmap = new Map();
  stepTemplate = signal<TemplateRef<any> | null>(null);

  //to get the current step object from stepperMetaData to use serial number afterwards
  get getCurrentStep() {
    const currentStep = this.stepperMetaData().find(
      (step) => step.key === this.currentStep()
    );
    return currentStep!;
  }

  //Validation Logic
  get validateStepContent() {
    return this.getCurrentStep?.handler?.();
  }

  markDataAsVisited(currentStep: any) {
    const modifiedData = this.stepperMetaData().map((step) =>
      currentStep.serialNumber > step.serialNumber
        ? { ...step, visited: true }
        : { ...step, visited: false }
    );
    return this.stepperMetaData.set(modifiedData);
  }

  ngAfterContentInit() {
    //hashmap to render templates
    this.stepsContent().forEach((step) => {
      this.stepHashmap.set(step.templateMetaData(), step.template);
    });

    if (this.activeStep() && this.stepHashmap.has(this.activeStep())) {
      this.currentStep.set(this.activeStep());
      this.stepTemplate.set(this.stepHashmap.get(this.activeStep()));
    }

    if (this.getCurrentStep?.serialNumber) {
      this.markDataAsVisited(this.getCurrentStep);
    }
  }

  onClick(step: any) {
    if (!this.validateStepContent) {
      return;
    }

    const temp = this.stepHashmap.get(step.key);
    this.stepTemplate.set(temp);
    this.currentStep.set(step.key);

    if (this.getCurrentStep?.serialNumber) {
      this.markDataAsVisited(this.getCurrentStep);
    }
  }

  prev() {
    const prevStep = this.stepperMetaData().find(
      (step) => step.serialNumber === this.getCurrentStep?.serialNumber - 1
    );
    this.currentStep.set(prevStep?.key);
    this.stepTemplate.set(this.stepHashmap.get(prevStep?.key));
    if (prevStep?.serialNumber) {
      this.markDataAsVisited(prevStep);
    }
  }

  next() {
    if (!this.validateStepContent) {
      return;
    }
    const nextStep = this.stepperMetaData().find(
      (step) => step.serialNumber === this.getCurrentStep.serialNumber + 1
    );
    this.currentStep.set(nextStep?.key);
    this.stepTemplate.set(this.stepHashmap.get(nextStep?.key));
    if (nextStep?.serialNumber) {
      this.markDataAsVisited(nextStep);
    }
  }
}
