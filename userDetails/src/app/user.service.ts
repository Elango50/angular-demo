import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-users';
import { Observable, Subject, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  constructor( private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
   console.log(message);
  }

  getUser(param : string): Observable<User[]> {
    console.log("calling getUser");
    var result1 : Observable<User[]>;
     result1 = this.http.get<User[]>(`http://localhost:8080/users/${param}`,httpOptions).pipe(
      tap(_ => this.log(`found heroes matching "${param}"`)),
      catchError(this.handleError<User[]>('search users', []))
    );
    console.log("calling getUser result1......" + result1);

    return result1;
  }

}
