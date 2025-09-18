import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  input,
  model,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { FormGroup, FormControl, FormsModule } from '@angular/forms';
import { PopUpNgContentComponent } from '../../../../shared/pop-up-ng-content/pop-up-ng-content.component';

@Component({
  selector: 'app-pop-up-ng-content-page',
  imports: [FormsModule, PopUpNgContentComponent],
  templateUrl: './pop-up-ng-content.component.html',
  styleUrl: './pop-up-ng-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopUpNgContentPage {
  username: string = '';
  email: string = '';
  password: string = '';

  child = viewChild(PopUpNgContentComponent, { read: PopUpNgContentComponent });
  formRef = viewChild('form', { read: ElementRef<HTMLFormElement> });

  // Need to reset particular modal based on ID
  closeBtn(event: any) {
    this.formRef()?.nativeElement.reset();
  }

  // Used with ng-content - got reference from child component(popupNgcontent) and then close() worked
  create(form: any) {
    this.child()?.triggerClose();
    form.reset();
  }
}
