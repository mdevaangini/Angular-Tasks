import { inject, Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpContext, HttpParams } from '@angular/common/http';
import { MY_TOKEN } from '../model/permission';

@Injectable({
  providedIn: 'root',
})
export class MockApiService {
  httpService = inject(HttpService);

  constructor() {}

  getJsonData() {
    const params = new HttpParams().set('active', 'true');
    const context = new HttpContext().set(MY_TOKEN, true);

    return this.httpService.get(
      'https://jsonplaceholder.typicode.com/todos/1',
      true,
      params,
      context
    );
  }
  getAllJsonData() {
    return this.httpService.get(
      'https://jsonplaceholder.typicode.com/todos',
      false
    );
  }
}
