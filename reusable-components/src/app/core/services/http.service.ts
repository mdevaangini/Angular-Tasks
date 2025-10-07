import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  http = inject(HttpClient);
  loadingService = inject(LoadingService);
  constructor() {}

  get<T>(url: string, loader: boolean): Observable<T> {
    if (loader) this.loadingService.isLoading = true;
    else this.loadingService.isLoading = false;
    return this.http.get<T>(url);
  }

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
