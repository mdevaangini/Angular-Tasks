import { HttpClient, HttpContext, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { finalize, Observable, take } from 'rxjs';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  http = inject(HttpClient);
  loadingService = inject(LoadingService);
  constructor() {}


  get<T>(
    url: string,
    loader: boolean,
    params?: HttpParams,
    context?: HttpContext
  ): Observable<T> {
    this.loadingService.isLoading = loader;
    return this.http.get<T>(url, { params, context }).pipe(take(1),finalize(() => {
      this.loadingService.isLoading = false;
    }));
  }

  // take(1) → ensures only one emission and automatic unsubscribe.

  post<T>(url: string, body: any, loader: boolean = false): Observable<T> {
    return this.http.post<T>(url, body);
  }

  put<T>(url: string, body: any, loader: boolean = false): Observable<T> {
    return this.http.put<T>(url, body);
  }

  delete<T>(url: string, loader: boolean = false): Observable<T> {
    return this.http.delete<T>(url);
  }
}






// <T> -> generic type parameter  -> means method can work with any type and the type is determined when you call the method
// Observable<T> -> represents the stream of data that you can subscribe to -> when subscribe , we'll get data of type T


// finalize -> operator from rxjs -> allows you to perform some action when the observable completes or errors out
// here we use finalize to set loading to false when the HTTP request completes or errors out
// this ensures that the loading indicator is turned off regardless of the outcome of the request


// pipe() is a method on RxJS Observables that lets you chain operators together to transform, filter, or manage data coming from an observable.
// Think of it like a data processing pipeline:
// The observable emits data → it flows through the pipe → operators inside modify or control the stream → your subscriber receives the final output.


// take(1) is one of those RxJS operators that you use inside a pipe().
// It means:

    // “Take only the first emission from this observable and then automatically complete it.”

    // It subscribes to the observable
    // As soon as one value is emitted
    // It passes it downstream, then unsubscribes automatically
    // no memoery leaks




//What happens internally (mechanics)

    // When you use take(1), it sets an internal counter (1).
    // Each time the observable emits, the counter decrements.
    // When it reaches 0, RxJS:
    // emits the value downstream,
    // calls complete(),
    // and unsubscribes from the source observable.
    // So no manual cleanup is needed.