import { NgTemplateOutlet } from '@angular/common';
import { Component, input, output, signal, TemplateRef } from '@angular/core';

@Component({
  selector: 'dm-manual-popup',
  imports: [NgTemplateOutlet],
  standalone: true,
  templateUrl: './manual-popup.component.html',
  styleUrls: ['./manual-popup.component.scss'],
})
export class ManualPopupComponent {
  id = input.required();
  close = output<any>();

  launchBtn = input<TemplateRef<any> | null>(null);
  modalHeader = input<TemplateRef<any> | null>(null);
  modalBody = input<TemplateRef<any> | null>(null);
  modalFooter = input<TemplateRef<any> | null>(null);

  isOpen = signal(false);

  openModal() {
    this.isOpen.set(true);
  }

  closeModal(id: any) {
    this.isOpen.set(false);
    this.close.emit({ id, status: true });
  }
}
