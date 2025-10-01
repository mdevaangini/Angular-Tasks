import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ERROR_MESSAGES } from '../constants/errors';

export const errorHandlingInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      switch (error.status) {
        case 401:
          console.log(ERROR_MESSAGES.UNAUTHORIZED);
          break;
        case 404:
          console.log(ERROR_MESSAGES.NOT_FOUND);
          break;
        case 500:
          console.log(ERROR_MESSAGES.SERVER);
          break;
        default:
          console.log(ERROR_MESSAGES.UNKNOWN);
          break;
      }
      return throwError(() => error); //without this -> error will be swallowed inside the interceptor, by rethrowing -> we let the components .subscribe({error}) block still executes
    })
  );
};
