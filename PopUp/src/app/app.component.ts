import { Component, inject } from '@angular/core';
import { PopUpNgContentComponent } from './shared/pop-up-ng-content/pop-up-ng-content.component';
import { PopUpNgTemplateOutletComponent } from './shared/pop-up-ng-template-outlet/pop-up-ng-template-outlet.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    PopUpNgTemplateOutletComponent,
    PopUpNgContentComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  loginForm = new FormGroup({
    loginUsername: new FormControl(''),
    loginPassword: new FormControl(''),
  });

  closeBtn(event: any) {
    console.log(event);
    if (event.id === 'user-template') {
      this.loginForm.reset();
    } else {
    }
  }

  create(form: any) {
    console.log('Creation info', form.value);
    form.reset();
  }

  save() {
    console.log('Login info', this.loginForm.value);
    this.loginForm.reset();
  }
}
