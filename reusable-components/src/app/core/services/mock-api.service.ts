import { inject, Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class MockApiService {
  httpService = inject(HttpService);

  constructor() {}

  getJsonData() {
    return this.httpService.get(
      'https://jsonplaceholder.typicode.com/todos/1',
      true
    );
  }
  getAllJsonData() {
    return this.httpService.get(
      'https://jsonplaceholder.typicode.com/todos',
      false
    );
  }
}
