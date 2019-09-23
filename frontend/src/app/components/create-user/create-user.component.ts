import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CompanyCRUDService } from 'src/app/services/company-crud.service';
import { CRole } from './../../interfaces/croleinterface';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { UserCRUDService } from 'src/app/services/user-crud.service';


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
    name: ['', Validators.required],
    lastname: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
    gender: ['', Validators.required],
    email: ['', Validators.required],
    companyRoleID: ['', Validators.required],
    companyAreaID: ['', Validators.required],
    systemRoleID: ['', Validators.required]
  });


  /* properties from database */
  systemroles: CRole;
  areas: CRole;
  companyroles: CRole;

  constructor(
    private _formBuilder: FormBuilder,
    private company: CompanyCRUDService,
    private _userService: UserCRUDService
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

    this._userService.createUser(newUser).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    })
  }

}