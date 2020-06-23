import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpErrorResponse,
} from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, catchError, tap, map } from 'rxjs/operators';
import { Oneday } from '../models/oneday';
import { DataAdapter } from './data-adapter';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private SERVER_URL: string = 'https://api.covid19api.com/';
  private API_KEY = '';
  public timeline: number[];

  constructor(private _httpClient: HttpClient, private adapter: DataAdapter) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  public sendGetRequest(url: string) {
    this.timeline = [];
    return this._httpClient
      .get(this.SERVER_URL + url, {
        params: new HttpParams({ fromString: '' }),
        observe: 'response',
      })
      .pipe(retry(3), catchError(this.handleError));
  }

  // Error handling
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
