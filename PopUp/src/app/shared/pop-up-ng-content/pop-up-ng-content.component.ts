import {
  Component,
  computed,
  input,
  model,
  output,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-pop-up-ng-content',
  imports: [],
  templateUrl: './pop-up-ng-content.component.html',
  styleUrl: './pop-up-ng-content.component.scss',
})
export class PopUpNgContentComponent {
  /**
   * @id -  To differentiate the modals
   */

  id = input.required();
  closed = model<boolean>();
  close = output<any>();
  isShow = signal(false);

  isCLosed = computed(() => {
    if (this.closed()) {
      this.isShow.set(true);
    }
  });

  closeModal(id: string) {
    this.close.emit({ id: id, status: true });
  }
}
