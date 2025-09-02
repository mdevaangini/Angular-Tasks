import { NgTemplateOutlet } from '@angular/common';
import { Component, input, model, output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  imports: [NgTemplateOutlet],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.scss',
})
export class PopUpComponent {
  description = input<string>('');
  id = input.required();
  closed = model<boolean>();
  close = output<boolean>();

  launchBtn = input<TemplateRef<any> | null>(null);
  modalHeader = input<TemplateRef<any> | null>(null);
  modalBody = input<TemplateRef<any> | null>(null);
  modalFooter = input<TemplateRef<any> | null>(null);

  ngOnInit() {
    console.log(this.closed());
  }
  closeModal() {
    this.closed.set(true);
    this.close.emit(true);
  }
}
