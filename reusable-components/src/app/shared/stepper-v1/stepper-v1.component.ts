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
  currentStepRecord = signal<any>({});
  stepHashmap = new Map();
  stepTemplate = signal<TemplateRef<any> | null>(null);

  ngAfterContentInit() {
    this.stepsContent().forEach((step) => {
      this.stepHashmap.set(step.templateMetaData(), step.template);
    });

    if (this.activeStep() && this.stepHashmap.has(this.activeStep())) {
      this.currentStep.set(this.activeStep());
      const currentStep = this.getCurrentStep;
      if (currentStep?.serialNumber) {
        this.visitedMetaDataList(currentStep);
      }
      this.stepTemplate.set(this.stepHashmap.get(this.activeStep()));
    }
  }

  onClick(step: any) {
    const temp = this.stepHashmap.get(step.key);
    this.stepTemplate.set(temp);
    this.currentStep.set(step.key);

    this.currentStepRecord.set(this.getCurrentStep);
    if (this.currentStepRecord()?.serialNumber) {
      this.visitedMetaDataList(this.currentStepRecord());
    }
  }

  prev() {
    this.currentStepRecord.set(this.getCurrentStep);

    if (this.currentStepRecord()) {
      const prevStep = this.stepperMetaData().find(
        (step) =>
          step.serialNumber === this.currentStepRecord().serialNumber - 1
      );
      this.currentStep.set(prevStep?.key);
      this.stepTemplate.set(this.stepHashmap.get(prevStep?.key));
      if (prevStep?.serialNumber) {
        this.visitedMetaDataList(prevStep);
      }
    }
  }

  next() {
    this.currentStepRecord.set(this.getCurrentStep);

    if (this.currentStepRecord()) {
      //Validation Logic
      if (this.currentStepRecord().handler) {
        const canProceed = this.currentStepRecord().handler();

        if (!canProceed) {
          console.log('Validation failed');
          return;
        }
      }

      const nextStep = this.stepperMetaData().find(
        (step) =>
          step.serialNumber === this.currentStepRecord().serialNumber + 1
      );
      this.currentStep.set(nextStep?.key);
      this.stepTemplate.set(this.stepHashmap.get(nextStep?.key));
      if (nextStep?.serialNumber) {
        this.visitedMetaDataList(nextStep);
      }
    }
  }

  get getCurrentStep() {
    const currentStep = this.stepperMetaData().find(
      (step) => step.key === this.currentStep()
    );
    return currentStep;
  }

  visitedMetaDataList(visited: any) {
    const visitedStep = this.stepperMetaData().map((step) =>
      visited.serialNumber > step.serialNumber
        ? { ...step, visited: true }
        : { ...step, visited: false }
    );
    return this.stepperMetaData.set(visitedStep);
  }
}
