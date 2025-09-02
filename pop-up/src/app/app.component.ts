import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { PopUpComponent } from './shared/pop-up/pop-up.component';
import { SampleModalComponent } from './ng-template-outlet/sample-modal/sample-modal.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PopUpComponent, UserComponent, SampleModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  closeBtn(event: any) {
    console.log(event);
  }
}
