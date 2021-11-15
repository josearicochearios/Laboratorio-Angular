import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    const httpOptions = {
      Headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Autorization': 'Bearer RWcy1NFxC-mzYQjMNF0L'
      })
    };
    return this.http.get('www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
    .pipe(catchError(
      (error) => {
        console.log(error);
        return throwError('Error');
      }));
  }

}
