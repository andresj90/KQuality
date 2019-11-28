import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {

  sessionToken = '';

  constructor() { }


  // setSessionToken(token) {
  //   this.sessionToken = sessionStorage
  // }

}
