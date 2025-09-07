import {
  Component,
  ElementRef,
  inject,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { PopUpNgContentComponent } from './shared/pop-up-ng-content/pop-up-ng-content.component';
import { PopUpNgTemplateOutletComponent } from './shared/pop-up-ng-template-outlet/pop-up-ng-template-outlet.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { TableComponent } from './shared/table/table.component';

@Component({
  selector: 'app-root',
  imports: [
    PopUpNgTemplateOutletComponent,
    PopUpNgContentComponent,
    ReactiveFormsModule,
    FormsModule,
    TableComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  child = viewChild(PopUpNgContentComponent, { read: PopUpNgContentComponent });
  formRef = viewChild('form', { read: ElementRef<HTMLFormElement> });

  loginForm = new FormGroup({
    loginUsername: new FormControl(''),
    loginPassword: new FormControl(''),
  });

  // Need to reset particular modal based on ID
  closeBtn(event: any) {
    console.log(event);
    if (event.id === 'user-template') {
      this.loginForm.reset();
    } else {
      this.formRef()?.nativeElement.reset();
    }
  }

  // Used with ng-content - got reference from child component(popupNgcontent) and then close() worked
  create(form: any) {
    console.log('Creation info', form.value);
    this.child()?.triggerClose();
    form.reset();
  }

  // Used with ngTemplateOutlet - has close reference with context
  save() {
    console.log('Login info', this.loginForm.value);
    this.loginForm.reset();
  }
}
