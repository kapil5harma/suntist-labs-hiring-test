import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';

// interface AboutResponse {
//   results: Array<string>;
//   category: string;
//   description: string;
// }

@Injectable()
export class HttpService {
  apiURL = 'https://api.suntist.com';
  constructor(private http: HttpClient) {}

  getAboutData(): Observable<any> {
    const url = `${this.apiURL}/aboutus/`;
    return this.http.get(url);
  }
}
