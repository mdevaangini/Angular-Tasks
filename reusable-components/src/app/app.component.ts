import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  TemplateRef,
  viewChild,
} from '@angular/core';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { RouterOutlet } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { MockApiService } from './core/services/mock-api.service';
import { LoadingService } from './core/services/loading.service';
import { FiltersComponent } from './shared/filters/filters.component';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [NavBarComponent, RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  mockService = inject(MockApiService);
  loadingService = inject(LoadingService);
  data = signal('');

  ngOnInit() {
    this.mockService.getJsonData().subscribe({
      next: (res: any) => {
        this.data.set(res);
      },
      error: (err) => console.log('Components: ', err),
    });
  }
}
