import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserCRUDService {

  constructor(
    private http: HttpClient,
  ) { }


  //this is an object of type HTTPHeaders which we will use to send the request 
  header = new HttpHeaders();

  /* List of methods for http requests to the backend*/ 

  //POST method to add a new user to the system
  createUser(user) {
   this.header.append('content-type', 'application/json'); 
   return this.http.post('http://localhost:3000/user/create', user, {headers: this.header, responseType: "json"});
  }

  //POST method to update an existing user in the system 
  updateUser(user) {
   this.header.append('content-type', 'application/json'); 
   return this.http.put('http://localhost:3000/user/update', user, {headers: this.header, responseType: "json"});
  }

  


}
