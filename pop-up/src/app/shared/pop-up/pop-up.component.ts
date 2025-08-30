import { Component, input } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  imports: [],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.scss',
})
export class PopUpComponent {
  description = input('');
  id = input('');
}
