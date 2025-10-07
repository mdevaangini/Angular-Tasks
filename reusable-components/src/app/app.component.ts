import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { RouterOutlet } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { MockApiService } from './core/services/mock-api.service';
import { LoadingService } from './core/services/loading.service';

@Component({
  selector: 'app-root',
  imports: [NavBarComponent, RouterOutlet, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  mockService = inject(MockApiService);
  loadingService = inject(LoadingService);

  data = signal('');

  ngOnInit() {
    console.log(this.loadingService.isLoading);

    this.mockService.getJsonData().subscribe({
      next: (res: any) => {
        this.data.set(res);
      },
      error: (err) => console.log('Components: ', err),
      complete: () => {
        this.loadingService.isLoading = false; //why?
      },
    });
  }
}
