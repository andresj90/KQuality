import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CRole } from '../interfaces/croleinterface';


@Injectable({
  providedIn: 'root'
})
export class ProcedureCrudService {

  constructor(
    private http: HttpClient,
  ) {}

  header = new HttpHeaders();

  /*----------------------------------------------------------
  SERVICES FOR DOCUMENT PROCEDURE TABLE
  ----------------------------------------------------------
  */

 listProcedures(): Observable<CRole> {
  this.header.append('content-type', 'application/json'); 
  return this.http.get<CRole>('http://localhost:3000/procedure/all', {headers: this.header});
} 
}
