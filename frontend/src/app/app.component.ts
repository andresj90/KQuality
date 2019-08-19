import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  statusNavBar: boolean;

  // constructor(public navBar: NavBarComponent,
  //   private http: HttpClientModule) { }

  ngOnInit() {
    // this.opened = this.navBar.opened;
  }
}
