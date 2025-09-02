import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PopUpComponent } from '../shared/pop-up/pop-up.component';

@Component({
  selector: 'app-user',
  imports: [FormsModule, PopUpComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
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
