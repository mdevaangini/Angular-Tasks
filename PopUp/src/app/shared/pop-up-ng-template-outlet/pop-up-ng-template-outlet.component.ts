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
  imports: [],
  templateUrl: './pop-up-ng-template-outlet.component.html',
  styleUrl: './pop-up-ng-template-outlet.component.scss',
})
export class PopUpNgTemplateOutletComponent {
  /**
   * @description -  for heading
   */
  description = input<string>('');
  id = input.required();
  closed = model<boolean>();
  close = output<boolean>();

  launchBtn = input<TemplateRef<any> | null>(null);
  modalHeader = input<TemplateRef<any> | null>(null);
  modalBody = input<TemplateRef<any> | null>(null);
  modalFooter = input<TemplateRef<any> | null>(null);

  isShow = computed(() => {
    this.closed();
  });

  closeModal() {
    this.closed.set(true);
    this.close.emit(true);
  }
}
