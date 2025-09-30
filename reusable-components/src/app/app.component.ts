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
    this.mockService.getJsonData().subscribe((config: any) => {
      this.data.set(config);
    });
  }
}
