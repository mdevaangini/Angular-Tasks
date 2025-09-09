import { Component } from '@angular/core';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from './shared/table/table.component';

@Component({
  selector: 'app-root',
  imports: [NavBarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
