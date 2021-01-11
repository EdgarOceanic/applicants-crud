import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Applicant} from './applicant';
import {catchError, map, tap} from 'rxjs/operators';

const urlApi = 'api/applicants';
const headers = new HttpHeaders({'Content-Type': 'application/json'});

@Injectable({
  providedIn: 'root'
})
export class ApplicantsService {

  constructor(private http: HttpClient) {
  }

  getApplicants(filter: string | null): Observable<Applicant[]> {
    const url = filter ? `${urlApi}?name=${filter}` : urlApi;
    return this.http.get<Applicant[]>(url).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  createApplicant(applicant: Applicant): Observable<Applicant> {
    const payload: Applicant = {...applicant, id: null};
    return this.http.post<Applicant>(urlApi, payload, {headers});
  }

  updateApplicant(applicant: Applicant): Observable<Applicant> {
    return this.http.put<Applicant>(`${urlApi}/${applicant.id}`, applicant, {headers}).pipe(
      map(() => applicant),
      catchError(this.handleError)
    );
  }

  deleteApplicant(id: number): Observable<{}> {
    return this.http.delete<Applicant>(`${urlApi}/${id}`, {headers})
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(err: any): Observable<any> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
