import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  model,
  output,
  TemplateRef,
} from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { PopUpNgTemplateOutletComponent } from '../../../../shared/pop-up-ng-template-outlet/pop-up-ng-template-outlet.component';

@Component({
  selector: 'app-pop-up-ng-template-outlet-page',
  imports: [ReactiveFormsModule, PopUpNgTemplateOutletComponent],
  templateUrl: './pop-up-ng-template-outlet.component.html',
  styleUrl: './pop-up-ng-template-outlet.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopUpNgTemplateOutletPage {
  loginForm = new FormGroup({
    loginUsername: new FormControl(''),
    loginPassword: new FormControl(''),
  });

  // Need to reset particular modal based on ID
  closeBtn(event: any) {
    this.loginForm.reset();
  }

  // Used with ngTemplateOutlet - has close reference with context
  save() {
    this.loginForm.reset();
  }
}
