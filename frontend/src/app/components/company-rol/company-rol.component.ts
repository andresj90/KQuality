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

  name: FormGroup;
  description: FormGroup;

  /* properties from database */
  companyroles:  CRole;

  matcher = new MyErrorStateMatcher();

  constructor(
    private http: HttpClient,
    private company: CompanyCRUDService,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.name = this._formBuilder.group({
      name: ['', Validators.required]
    });
    this.description = this._formBuilder.group({
      description: ['', Validators.required]
    });
    this.company.listCompanyRoles().subscribe((data:CRole) => {
      this.companyroles = data;
      console.log(this.companyroles.elements); 
     });
  }

  addCompanyRole() {
      let newCompanyrole = {
        name: this.name.get('name').value,
        description: this.description.get('description').value
      }
      this.company.addNewCompanyRole(newCompanyrole).subscribe((data) => {
        console.log(data);
      }, (error) => {
        console.log(error);
      });
      let companyrol = JSON.stringify(newCompanyrole); 
      console.log(`NEW COMPANYROL ${companyrol}`);
    }


}
      