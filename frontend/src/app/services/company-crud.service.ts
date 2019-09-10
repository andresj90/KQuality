import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CRole } from './../interfaces/croleinterface';

@Injectable({
  providedIn: 'root'
})
export class CompanyCRUDService {

  constructor(
    private http: HttpClient,
  ) { }

  //this is an object of type HTTPHeaders which we will use to send the request 
  header = new HttpHeaders();

  /*
  ----------------------------------------------------------------------------------------------
  METHODS FOR SYSTEM ROLE
  ----------------------------------------------------------------------------------------------
  */

  //POST method to add a new role to the system
  addNewSystemRole(newRole) {
    this.header.append('Content-type', 'application/json');
    return this.http.post('http://localhost:3000/systemrole/create', newRole, { headers: this.header });
  }

  //get all the roles listed for the users
  listSystemRoles() {
    this.header.append('content-type', 'application/json');
    return this.http.get('http://localhost:3000/systemrole/all', { headers: this.header });
  }


  /*
 ----------------------------------------------------------------------------------------------
 METHODS FOR COMPANY AREA
 ----------------------------------------------------------------------------------------------
 */

  addCompanyArea(newArea) {
    this.header.append('Content-type', 'application/json');
    return this.http.post('http://localhost:3000/area/create', newArea, { headers: this.header })
    .pipe(map((res:Response) => res.json()));
  }

  //get all the roles listed for the users
  listAreas() {
    this.header.append('content-type', 'application/json');
    return this.http.get('http://localhost:3000/area/all');
  }


  /*
 ----------------------------------------------------------------------------------------------
 METHODS FOR COMPANY ROLE
 ----------------------------------------------------------------------------------------------
 */

  addNewCompanyRole(newRole) {
    this.header.append('Content-type', 'application/json');
    return this.http.post('http://localhost:3000/company/create', newRole, { headers: this.header });
  }

  //get all the roles listed for the users
  listCompanyRoles(): Observable<CRole[]> {
    this.header.append('content-type', 'application/json');
    return this.http.get<CRole[]>('http://localhost:3000/company/all', { headers: this.header });
  }


}
