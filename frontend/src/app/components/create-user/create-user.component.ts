import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { CompanyCRUDService } from 'src/app/services/company-crud.service';
import { CRole } from './../../interfaces/croleinterface';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit  {
  isLinear = false;
  panelOpenState = false;
  hide = true;
  name: FormGroup;
  lastname: FormGroup;
  username: FormGroup;
  password: FormGroup;
  sexo: FormGroup;
  companyRoleID: FormGroup;
  companyAreaID: FormGroup;
  systemRoleID: FormGroup;

  /* properties from database */
  systemroles:  CRole;
  areas: CRole;
  companyroles: CRole;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();


  constructor(
    
    private _formBuilder: FormBuilder,
    private company : CompanyCRUDService
    ) { }

  ngOnInit() {

    this.name = this._formBuilder.group({
      name: ['', Validators.required]
    });
    this.lastname = this._formBuilder.group({
      lastname: ['', Validators.required]
    });
    this.username = this._formBuilder.group({
      username: ['', Validators.required]
    });
    this.password = this._formBuilder.group({
      password: ['', Validators.required]
    });
    this.sexo = this._formBuilder.group({
      sexo : ['', Validators.required]
    });
    this.companyRoleID = this._formBuilder.group({
      companyRoleID: ['', Validators.required]
    });
    this.systemRoleID = this._formBuilder.group({
      systemRoleID: ['', Validators.required]
    });
    this.companyAreaID = this._formBuilder.group({
      companyAreaID: ['', Validators.required]
    });

     this.company.listSystemRoles().subscribe((data:CRole) => {
      this.systemroles = data; 
      console.log(this.systemroles.elements);
     });

     this.company.listAreas().subscribe((data:CRole) => {
      this.areas = data;
      console.log(this.areas.elements); 
     });
    
     this.company.listCompanyRoles().subscribe((data: CRole) => {
      this.companyroles = data; 
      console.log(this.companyroles.elements);
     }); 


  }

}
