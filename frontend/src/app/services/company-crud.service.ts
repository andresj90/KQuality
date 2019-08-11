import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CompanyCRUDService {

  
  constructor(
    private http: HttpClient,
  ) { }
  
  //this is an object of type HTTPHeaders which we will use to send the request 
  header = new HttpHeaders();

  /* List of methods for http requests to the backend*/ 

  //POST method to add a new role to the system
  addNewSystemRole(newRole) {
    this.header.append('Content-type', 'application/json');
    return this.http.post('http://localhost:3000/systemrole/create', newRole, { headers: this.header });
  }

  //get all the roles listed for the users
  listSystemRoles() {
    this.header.append('content-type', 'application/json'); 
    return this.http.get('http://localhost:3000/systemrole/all', {headers: this.header});
  }

}
