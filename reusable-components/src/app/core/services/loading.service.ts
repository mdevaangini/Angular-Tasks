import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private _isLoading = signal(false);
  constructor() {}

  get isLoading() {
    return this._isLoading();
  }

  set isLoading(val: boolean) {
    //setting values in loading interceptor
    this._isLoading.set(val);
  }
}
