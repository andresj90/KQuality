import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyCRUDService {

  constructor(
    private http: HttpClient,
  ) { }

  addNewSystemRole(newRole) {
    let header = new HttpHeaders();
    header.append('Content-type', 'application/json');
    return this.http.post('http://localhost:3000/systemrole/create', newRole, { headers: header });
  }

}
