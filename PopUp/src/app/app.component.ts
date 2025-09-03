import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  username: string = '';
  email: string = '';
  modalClose = false;

  closeBtn(event: any) {
    console.log(event);
  }
  save() {
    console.log(this.modalClose);
    this.modalClose = true;
    console.log('Form Data:', {
      username: this.username,
      email: this.email,
    });
  }
}
