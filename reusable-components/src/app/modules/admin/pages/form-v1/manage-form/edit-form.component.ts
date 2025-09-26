import { JsonPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-manage-form',
  imports: [RouterOutlet, ReactiveFormsModule, JsonPipe],
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.scss',
})
export class ManageFormPage {
  formGroup = new FormGroup({
    // firstName: new FormControl(''),
    // lastName: new FormControl(''),
    // age: new FormControl(''),
  });

  formArray = signal<any[]>([]);
  result = signal<any[]>([]);
  router = inject(Router);
  route = inject(ActivatedRoute);
  mode = signal<any>('');

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.mode.set(params.get('mode'));
    });
  }

  add() {
    const id = Math.random().toString(36).substring(2, 10);

    this.formArray.update((form) => {
      return [...form, { id: id }];
    });
    this.addFormControls(id);
  }

  onSubmit() {
    this.result.set(
      this.formArray().map((item) => {
        return {
          id: item.id,
          firstName: this.formGroup.get('firstName_' + item.id)?.value,
          lastName: this.formGroup.get('lastName_' + item.id)?.value,
          age: this.formGroup.get('age_' + item.id)?.value,
        };
      })
    );

    this.formGroup.reset();
  }

  addFormControls(id: any) {
    this.formGroup.addControl('firstName_' + id, new FormControl(''));
    this.formGroup.addControl('lastName_' + id, new FormControl(''));
    this.formGroup.addControl('age_' + id, new FormControl(''));
  }

  setFormControls(id: any, data: any) {
    this.formGroup.get('firstName_' + id)?.setValue(data.firstName);
    this.formGroup.get('lastName_' + id)?.setValue(data.lastName);
    this.formGroup.get('age_' + id)?.setValue(data.age);
  }

  edit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    this.result().forEach((item: any) => {
      this.setFormControls(item.id, item);
    });
  }

  remove(id: any) {
    this.formArray.set(
      this.formArray().filter((item) => {
        return item.id !== id;
      })
    );
  }
}
