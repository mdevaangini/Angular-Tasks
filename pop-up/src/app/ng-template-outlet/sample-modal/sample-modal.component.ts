import { Component } from '@angular/core';
import { PopUpComponent } from '../shared/pop-up/pop-up.component';
import { NgTemplateOutlet } from '@angular/common';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-sample-modal',
  imports: [PopUpComponent, NgTemplateOutlet, UserComponent],
  templateUrl: './sample-modal.component.html',
  styleUrl: './sample-modal.component.scss',
})
export class SampleModalComponent {
  closeBtn(event: any) {
    console.log(event);
  }
}
