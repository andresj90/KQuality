import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    statusNavBar: boolean;
    setVisibility: boolean;
    
    getSessionStorage() {
      let token = sessionStorage.getItem('nonce');
      if (token != undefined && token != null) {
          return true
      } else {
          return false
      }
    }

    ngOnInit() {
       
    }

}