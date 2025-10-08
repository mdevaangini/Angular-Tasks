import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ERROR_MESSAGES } from '../model/errors';

export const errorHandlingInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      switch (error.status) {
        case 400:
          console.error(ERROR_MESSAGES.BAD_REQUEST);
          break;
        case 401:
          console.error(ERROR_MESSAGES.UNAUTHORIZED);
          break;
        case 403:
          console.error(ERROR_MESSAGES.FORBIDDEN);
          break;
        case 404:
          console.error(ERROR_MESSAGES.NOT_FOUND);
          break;
        case 500:
          console.error(ERROR_MESSAGES.SERVER);
          break;
        case 503:
          console.error(ERROR_MESSAGES.SERVICE_UNAVAILABLE);
          break;
        default:
          console.error(ERROR_MESSAGES.UNKNOWN);
          break;
      }

      // Important: rethrow the error so components can still handle it if needed
      return throwError(() => error);
    })
  );
};
