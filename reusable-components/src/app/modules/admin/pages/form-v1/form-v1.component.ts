import { JsonPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-form-v1',
  imports: [RouterOutlet, ReactiveFormsModule, JsonPipe],
  templateUrl: './form-v1.component.html',
  styleUrl: './form-v1.component.scss',
})
export class FormV1Page {
  router = inject(Router);
  route = inject(ActivatedRoute);

  edit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
  add() {
    this.router.navigate(['add'], { relativeTo: this.route });
  }
}
