import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-form-v2',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-v2.component.html',
  styleUrls: ['./form-v2.component.scss'],
})
export class FormV2Page {
  mainForm = new FormGroup({
    formArray: new FormArray([
      new FormGroup({
        grp: new FormArray([
          new FormGroup({
            name: new FormControl(['']),
          }),
        ]),
      }),
    ]),
  });

  get formArray() {
    return this.mainForm.get('formArray') as FormArray;
  }

  addOuter() {
    this.formArray.push(
      new FormGroup({
        grp: new FormArray([
          new FormGroup({
            name: new FormControl(['']),
          }),
        ]),
      })
    );
  }

  removeOuter(index: number) {
    this.formArray.removeAt(index);
  }

  getInnerArray(outerIndex: number) {
    return this.formArray.at(outerIndex).get('grp') as FormArray;
  }

  addInner(outerIndex: number) {
    this.getInnerArray(outerIndex).push(
      new FormGroup({
        name: new FormControl(['']),
      })
    );
  }

  removeInner(outerIndex: number, innerIndex: number) {
    this.getInnerArray(outerIndex).removeAt(innerIndex);
  }
}
