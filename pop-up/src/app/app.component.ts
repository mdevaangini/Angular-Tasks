import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { PopUpComponent } from './shared/pop-up/pop-up.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PopUpComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
