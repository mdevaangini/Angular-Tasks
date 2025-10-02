import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MockApiService {
  http = inject(HttpClient);

  constructor() {}

  getJsonData() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }
  getAllJsonData() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
