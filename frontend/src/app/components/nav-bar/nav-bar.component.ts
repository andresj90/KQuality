import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public pushRightClass: string;

  opened: boolean = true;
  @Output() public hideNavBarEvent = new EventEmitter();

 
  changeNavBarStatus () {
    this.opened = !this.opened;
    this.hideNavBarEvent.emit(this.opened);
  }
  constructor(public router: Router, private translate: TranslateService) {
    this.router.events.subscribe(val => {
        if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
            this.toggleNavbar();
        }
    });
  }

  ngOnInit() {}

  isToggled(): boolean {
    const dom: Element = document.querySelector('body');
    return dom.classList.contains(this.pushRightClass);
  }

  toggleNavbar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
  }

  onLoggedout() {
    localStorage.removeItem('isLoggedin');
    this.router.navigate(['/login']);
  }

}