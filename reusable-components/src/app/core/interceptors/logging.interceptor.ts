import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';
import { MY_TOKEN } from '../model/permission';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  const reqWithHeaders = req.clone({
    headers: req.headers.set('X-Test-Header', 'Test'),
  });

  // console.log(req.context.get(MY_TOKEN)); //to read context value
  return next(reqWithHeaders).pipe(
    tap((event) => {
      if (event.type === HttpEventType.Response) {
        // console.log(`Status: ${event.status}`);
      }
    })
  );
};
