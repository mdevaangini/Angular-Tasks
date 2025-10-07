import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loggingInterceptor } from './core/interceptors/logging.interceptor';
import { loadingInterceptor } from './core/interceptors/loading.interceptor';
import { errorHandlingInterceptor } from './core/interceptors/error-handling.interceptor';
import { retryInterceptor } from './core/interceptors/retry.interceptor';
import { PermissionService } from './core/services/permission.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAppInitializer(() => {
      const ps = inject(PermissionService);
      return ps.loadPermissionData();
    }),
    provideHttpClient(
      withInterceptors([
        loggingInterceptor,
        // loadingInterceptor, // removed so that can handle loading via httpservice
        errorHandlingInterceptor,
        retryInterceptor,
      ])
    ),
  ],
};

// When the app starts, Angular runs all AppInitializers.
// If any of them return a Promise, it waits for it to resolve before bootstrapping the root component.
