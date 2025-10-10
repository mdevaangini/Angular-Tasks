import { CommonModule, JsonPipe, KeyValuePipe, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  contentChild,
  inject,
  input,
  TemplateRef,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  ReactiveFormsModule,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-v2',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,NgTemplateOutlet],
  templateUrl: './form-v2.component.html',
  styleUrls: ['./form-v2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormV2Page {
  mainForm = new FormGroup<any>({});

  // userFormGroup = input.required<FormGroup<any>>();

  formMetaData = input.required<any>();
  template = contentChild(TemplateRef<any | undefined>)

  ngOnInit() {
    this.mainForm = new FormGroup({
      outer: new FormArray([]),
      grpOperator: new FormControl('and'),
      innerOperator: new FormControl('or'),
    });
  }

  createOuter() {
    return new FormGroup({
      inner: new FormArray([]),
    });
  }

  
  createInner() {
    // user is providing form controls
    let formGroup:any = {};
    for(let key in this.formMetaData())
    {
      formGroup[key]=new FormControl('', Validators.required);
    }

    return new FormGroup(formGroup);



    // component itself is providing form controls
    // return new FormGroup({
    //   name: new FormControl('', Validators.required),
    //   age: new FormControl(''),
    //   gender: new FormControl('', Validators.required),
    // });
  }

  get outer() {
    return this.mainForm.get('outer') as FormArray;
  }

  addOuter() {
    this.outer.push(this.createOuter());
  }

  removeOuter(index: number) {
    this.outer.removeAt(index);
  }

  getInnerArray(outerIndex: number) {
    return this.outer.at(outerIndex).get('inner') as FormArray;
  }

  addInner(outerIndex: number) {
    this.getInnerArray(outerIndex).push(this.createInner());
  }

  removeInner(outerIndex: number, innerIndex: number) {
    this.getInnerArray(outerIndex).removeAt(innerIndex);
  }

  onSubmit() {
    console.log(this.mainForm.getRawValue());
  }
}
