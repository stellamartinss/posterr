import { Injectable } from '@angular/core';
import { HttpHeaders, HttpResponse, HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { catchError, map } from 'rxjs/operators';

import { throwError } from 'rxjs';

@Injectable()
export class HttpService {

  apiUrl = ''

  constructor(private http: HttpClient) { }
  private handleError(error: HttpErrorResponse) {
    return throwError(error || '500 internal server error');
  }

  httpGet(path: any, token: string, params?: HttpParams) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    headers = headers.append('Access-Control-Allow-Origin', '*');

    let param = {};
    if (token !== null) {
      headers = new HttpHeaders().set('token', token);
    }
    if (params) {
      param = params;
    }

    return this.http
      .get(this.apiUrl + path, { headers: headers, params: param })
      .pipe(catchError(this.handleError));
  }

  httpPost(path: any, body: any, token: any) {
    const data = body;
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    if (token !== null) {
      headers = headers.append('token', token);
    }
    const options = { headers: headers };

    return this.http
      .post(this.apiUrl + path, data, options)
      .pipe(map((response: any) => response.json()))
      .pipe(catchError(this.handleError));
  }

  getSelectiveProccess(path: string, httpOptions?: any) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    const ls: string | null = localStorage.getItem('token')
    if (ls) {
      headers = headers.append('token', ls);
    }
    const options = { headers, params: (httpOptions && httpOptions.params) ? httpOptions.params : null };
    return this.http.get(path, options);
  }

  httpCustomPostUploadFile(path: any, body: any, token: string) {
    const data = JSON.stringify(body);
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    if (token !== null) {
      headers = headers.append('token', token);
    }
    const options = { headers: headers };

    return this.http
      .post(path, data, options)
      .pipe(map((response: any) => response.json()))
      .pipe(catchError(this.handleError));
  }

  httpPut(path: any, body: any, token: string) {
    const data = JSON.stringify(body);
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    if (token !== null) {
      headers = headers.append('token', token);
    }
    const options = { headers: headers };
    return this.http
      .put(this.apiUrl + path, data, options)
      .pipe(catchError(this.handleError));
  }

  httpDelete(path: any, token: string, params?: HttpParams) {
    let headers: HttpHeaders = new HttpHeaders();
    let param = {};
    headers = headers.append('Content-Type', 'application/json');
    if (token !== null) {
      headers = headers.append('token', token);
    }
    if (params) {
      param = params;
    }
    const options = { headers: headers, params: param };
    return this.http
      .delete(this.apiUrl + path, options)
      .pipe(catchError(this.handleError));
  }

  httpPostWithFormData(path: any, body: any, token: string) {
    let headers: HttpHeaders = new HttpHeaders();
    if (token !== null) {
      headers = headers.append('token', token);
    }
    const options = { headers: headers };

    return this.http
      .post(this.apiUrl + path, body, options)
      .pipe(map((response: any) => response.json()))
      .pipe(catchError(this.handleError));
  }
}
