import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpErrorResponse,
} from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { Summary } from '../models/summary.interface';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private SERVER_URL: string = 'https://api.covid19api.com/summary';
  private API_KEY = '';

  constructor(private _httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  public getDataRequest() {
    // Add safe, URL encoded_page parameter
    return this._httpClient
      .get(this.SERVER_URL, {
        params: new HttpParams({ fromString: '' }),
        observe: 'body',
      })
      .pipe(
        retry(1),
        catchError(this.handleError),
        tap((res) => {})
      );
  }

  public sendGetRequest() {
    return this._httpClient
      .get<Summary>(this.SERVER_URL, {
        params: new HttpParams({ fromString: '' }),
        observe: 'response',
      })
      .pipe(
        retry(3),
        catchError(this.handleError),
        tap((res) => {})
      );
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
