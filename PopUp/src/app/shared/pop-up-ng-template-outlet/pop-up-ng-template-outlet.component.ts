import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  computed,
  input,
  model,
  output,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-pop-up-ng-template-outlet',
  imports: [NgTemplateOutlet],
  templateUrl: './pop-up-ng-template-outlet.component.html',
  styleUrl: './pop-up-ng-template-outlet.component.scss',
})
export class PopUpNgTemplateOutletComponent {
  /**
   * @id -  To differentiate the modals
   */

  id = input.required();
  close = output<any>();

  launchBtn = input<TemplateRef<any> | null>(null);
  modalHeader = input<TemplateRef<any> | null>(null);
  modalBody = input<TemplateRef<any> | null>(null);
  modalFooter = input<TemplateRef<any> | null>(null);

  closeModal(id: any) {
    this.close.emit({ id: id, status: true });
  }
}
