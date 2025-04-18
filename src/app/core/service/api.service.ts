import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };
  constructor(private httpClient: HttpClient) {}
  private formatErrors(error: any) {
    return throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.httpClient
      .get(path, { params })
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.httpClient
      .put(path, JSON.stringify(body), this.httpOption)
      .pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.httpClient
      .post(path, JSON.stringify(body), this.httpOption)
      .pipe(catchError(this.formatErrors));
  }

  delete(path: string): Observable<any> {
    return this.httpClient
      .delete(path, this.httpOption)
      .pipe(catchError(this.formatErrors));
  }
  patch(path: string, body: Object = {}): Observable<any> {
    return this.httpClient
      .patch(path, JSON.stringify(body), this.httpOption)
      .pipe(catchError(this.formatErrors));
  }
}
