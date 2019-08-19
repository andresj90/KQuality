import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lateral-panel',
  templateUrl: './lateral-panel.component.html',
  styleUrls: ['./lateral-panel.component.scss']
})
export class LateralPanelComponent implements OnInit {

  public pushRightClass: string;

  constructor(public router: Router, private translate: TranslateService) {
    this.router.events.subscribe(val => {
        if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
            this.toggleLateralPanel();
        }
    });
}

  ngOnInit() {}

  isToggled(): boolean {
    const dom: Element = document.querySelector('body');
    return dom.classList.contains(this.pushRightClass);
  }

  toggleLateralPanel() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
  }

  onDocMaster() {
    localStorage.setItem('isLoggedin', 'true');
    this.router.navigate(['/document-master']);
  }
}