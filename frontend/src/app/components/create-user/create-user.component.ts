import { httpResponse } from './../../interfaces/httpResponse';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CompanyCRUDService } from 'src/app/services/company-crud.service';
import { CRole } from './../../interfaces/croleinterface';
import { UserCRUDService } from 'src/app/services/user-crud.service';

import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  isLinear = true;
  panelOpenState = false;


  /* Booleand values */
  response = false;
  hide = false;

  newUser = this._formBuilder.group({
    name: ['', Validators.required],
    lastname: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
    gender: ['', Validators.required],
    email: ['', Validators.required],
    companyRoleID: ['', Validators.required],
    systemRoleID: ['', Validators.required]
  });


  /* properties from database */
  systemroles: CRole;
  areas: CRole;
  companyroles: CRole;

  constructor(
    private _formBuilder: FormBuilder,
    private company: CompanyCRUDService,
    private _userService: UserCRUDService,
    private ngFlashMessageService: NgFlashMessageService
  ) { }



  ngOnInit() {
    this.company.listSystemRoles().subscribe((data: CRole) => {
      this.systemroles = data;
      console.log(this.systemroles.elements);
    });

    this.company.listCompanyRoles().subscribe((data: CRole) => {
      this.companyroles = data;
      console.log(this.companyroles.elements);
    });
  }


  addUser() {

    this.hide = true;

    let newUser = {
      name: this.newUser.get('name').value,
      lastname: this.newUser.get('lastname').value,
      gender: this.newUser.get('gender').value,
      email: this.newUser.get('email').value,
      username: this.newUser.get('username').value,
      password: this.newUser.get('password').value,
      companyRoleID: this.newUser.get('companyRoleID').value,
      systemRoleID: this.newUser.get('systemRoleID').value
    }

    this._userService.createUser(newUser).subscribe((data: httpResponse) => {
      console.log(data);

      if (data.success) {
        this.ngFlashMessageService.showFlashMessage({
          messages: ["Usuario Agregado Al Sistema"], 
          dismissible: false , 
          timeout: 5000,
          type: 'success'
        })
        
      } else {
        this.ngFlashMessageService.showFlashMessage({
          messages: ["Usuario No Pudo Ser Agregado Al Sistema, Email o Usuario ya existen"], 
          dismissible: false , 
          timeout: 5000,
          type: 'danger'
        })
        
      }

      this.hide = false

    }, err => {
      console.log(err);
    })
  }


}