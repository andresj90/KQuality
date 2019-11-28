import { Component, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  flag:boolean = false;  
  @Output() public setContentVisibility = new EventEmitter();

  constructor(public authService: AuthService, config: NgbModalConfig, private modalService: NgbModal) {
  
    config.backdrop = 'static';
    config.keyboard = false;

  }

  changeFlagStatus(){
    this.flag = true; 
    this.setContentVisibility.emit(this.flag);
    console.log(this.flag)
  } 



  open(content) {
    this.modalService.open(content);
  }


}