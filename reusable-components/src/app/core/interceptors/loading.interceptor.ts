import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { inject, signal } from '@angular/core';
import { tap } from 'rxjs';
import { LoadingService } from '../services/loading.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);

  loadingService.isLoading = true;
  return next(req).pipe(
    tap((event) => {
      if (event.type === HttpEventType.Response) {
        loadingService.isLoading = false;
      }
    })
  );
};
