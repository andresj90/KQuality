import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  opened: boolean = true;
  @Output() public hideNavBarEvent = new EventEmitter();

 
  changeNavBarStatus () {
    this.opened = !this.opened;
    this.hideNavBarEvent.emit(this.opened);
  }
  constructor() { }

  ngOnInit() {
  }



}
