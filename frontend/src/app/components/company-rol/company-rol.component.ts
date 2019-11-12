import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CompanyCRUDService } from 'src/app/services/company-crud.service';
import { CRole } from './../../interfaces/croleinterface';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-company-rol',
  templateUrl: './company-rol.component.html',
  styleUrls: ['./company-rol.component.scss']
})
export class CompanyRolComponent {

  isLinear = false;
  panelOpenState = false;
  hide = true;

  newRole = this._formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    companyAreaID: ['', Validators.required]
  }); 

  /* properties from database */
  companyareas:  CRole;

  constructor(
    private http: HttpClient,
    private company: CompanyCRUDService,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.company.listAreas().subscribe((data:CRole) => {
      console.log(data);
      this.companyareas = data;
      console.log(this.companyareas); 
     });
  }

  addCompanyRole() {

      this.hide = false;

      let role = {
        name: this.newRole.get('name').value,
        description: this.newRole.get('description').value,
        companyAreaID: this.newRole.get('companyAreaID').value 
      } 

      this.company.addNewCompanyRole(role).subscribe((data) => {
        console.log(data);
        this.hide = true; 
      }, (error) => {
        console.log(error);
      });
    }


}
      