import { Component, input, model, output } from '@angular/core';

@Component({
  selector: 'app-pop-up-ng-content',
  imports: [],
  templateUrl: './pop-up-ng-content.component.html',
  styleUrl: './pop-up-ng-content.component.scss',
})
export class PopUpNgContentComponent {
  description = input<string>('');
  id = input.required();
  closed = model<boolean>();
  close = output<boolean>();

  ngOnInit() {
    console.log(this.closed());
  }
  closeModal() {
    this.closed.set(true);
    this.close.emit(true);
  }
}
