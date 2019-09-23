import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CompanyCRUDService } from 'src/app/services/company-crud.service';
import { CRole } from './../../interfaces/croleinterface';
import { MatProgressBarModule } from '@angular/material/progress-bar';


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
export class CreateUserComponent implements OnInit {

  isLinear = true;
  panelOpenState = false;
  hide = true;

  newUser = this._formBuilder.group({
    name: FormGroup,
    lastname: FormGroup,
    username: FormGroup,
    password: FormGroup,
    gender: FormGroup,
    email: FormGroup,
    companyRoleID: FormGroup,
    companyAreaID: FormGroup,
    systemRoleID: FormGroup,
  }); 
  /* properties from database */
  systemroles: CRole;
  areas: CRole;
  companyroles: CRole;

  constructor(
    private _formBuilder: FormBuilder,
    private company: CompanyCRUDService
  ) { }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();



  ngOnInit() {
    this.company.listSystemRoles().subscribe((data: CRole) => {
      this.systemroles = data;
      console.log(this.systemroles.elements);
    });

    this.company.listAreas().subscribe((data: CRole) => {
      this.areas = data;
      console.log(this.areas.elements);
    });

    this.company.listCompanyRoles().subscribe((data: CRole) => {
      this.companyroles = data;
      console.log(this.companyroles.elements);
    });
  }


  addUser() {
    // let newUser = {
    //   name: this.name.get('name').value,
    //   lastname: this.lastname.get('lastname').value,
    //   gender: this.gender.get('gender').value,
    //   email: this.email.get('email').value,
    //   username: this.username.get('username').value,
    //   password: this.password.get('password').value,
    //   companyRoleID: this.companyRoleID.get('companyRoleID').value,
    //   companyAreaID: this.companyAreaID.get('companyAreaID').value,
    //   systemRoleID: this.systemRoleID.get('systemRoleID').value
    // }

    // let user = JSON.stringify(newUser);
    // console.log(`NEW USER ${user}`);
  }

}