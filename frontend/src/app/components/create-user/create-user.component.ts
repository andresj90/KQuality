import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { CompanyCRUDService } from 'src/app/services/company-crud.service';


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
  isLinear = true;

  name: FormGroup;
  lastname: FormGroup;
  username: FormGroup;
  password: FormGroup;
  companyRoleID: FormGroup;
  companyAreaID: FormGroup;
  systemRoleID: FormGroup;
  panelOpenState = false;
  hide = true;
  systemroles: [] | object;
  areas: [] | object;
  companyroles: [] | object;

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
    this.systemRoleID = this._formBuilder.group({
      systemRoleID: ['', Validators.required]
    });
    this.companyRoleID = this._formBuilder.group({
      companyRoleID: ['', Validators.required]
    });
    this.companyAreaID = this._formBuilder.group({
      companyAreaID: ['', Validators.required]
    });

     this.company.listSystemRoles().subscribe((data) => {
      this.systemroles = data; 
      console.log(data);
     });

     this.company.listAreas().subscribe((data) => {
      this.areas = data;
      console.log(data); 
     });
    
     this.company.listCompanyRoles().subscribe((data) => {
      this.companyroles = data; 
      console.log(data);
     }); 


  }

}
