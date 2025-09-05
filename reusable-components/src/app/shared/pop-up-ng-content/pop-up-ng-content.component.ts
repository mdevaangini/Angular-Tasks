import {
  Component,
  computed,
  ElementRef,
  input,
  model,
  output,
  signal,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'app-pop-up-ng-content',
  imports: [],
  templateUrl: './pop-up-ng-content.component.html',
  styleUrl: './pop-up-ng-content.component.scss',
})
export class PopUpNgContentComponent {
  /**
   * @description -  To differentiate the modals
   */

  id = input.required();
  closed = model<boolean>();
  close = output<any>();

  closeBtn = viewChild('closebtn', { read: ElementRef<HTMLButtonElement> });

  closeModal(id: any) {
    this.close.emit({ id: id, status: true });
  }

  triggerClose() {
    this.closeBtn()?.nativeElement.click();
  }
}
