import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormV2Page {
  mainForm = new FormGroup<any>({});

  ngOnInit() {
    this.mainForm = new FormGroup({
      outer: new FormArray([]),
    });
  }

  createOuter() {
    return new FormGroup({
      inner: new FormArray([]),
    });
  }

  createInner() {
    return new FormGroup({
      name: new FormControl(''),
    });
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
}
