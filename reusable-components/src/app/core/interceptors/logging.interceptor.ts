import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  const reqWithHeaders = req.clone({
    headers: req.headers.set('X-Test-Header', 'Test'),
  });

  return next(reqWithHeaders).pipe(
    tap((event) => {
      if (event.type === HttpEventType.Response) {
        // console.log(`Status: ${event.status}`);
      }
    })
  );
};
