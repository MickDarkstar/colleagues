import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  constructor(public http: HttpClient) { }

  get(url: string, reqOpts?: any) {
    return this.http.get<any>(url, reqOpts)
      .pipe(
        catchError(this.handleError<any>(`Api.get(endpoint: ${url}, reqOpts?: ${reqOpts})`))
      )
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
