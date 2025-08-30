import { Component } from '@angular/core';
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

  save() {
    console.log('Form Data:', {
      username: this.username,
      email: this.email,
    });
  }
}
