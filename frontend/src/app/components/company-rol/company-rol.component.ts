import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CompanyCRUDService } from 'src/app/services/company-crud.service';
import { CRole } from './../../interfaces/croleinterface';
import { NgFlashMessageService } from 'ng-flash-messages';
import { httpResponse } from './../../interfaces/httpResponse';

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
  hide=false;

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
    private _formBuilder: FormBuilder,
    private ngFlashMessageService: NgFlashMessageService
  ) { }

  ngOnInit() {
    this.company.listAreas().subscribe((data:CRole) => {
      console.log(data);
      this.companyareas = data;
      console.log(this.companyareas); 
     });
  }

  addCompanyRole() {
    this.hide = true;
      let role = {
        name: this.newRole.get('name').value,
        description: this.newRole.get('description').value,
        companyAreaID: this.newRole.get('companyAreaID').value 
      } 

      this.company.addNewCompanyRole(role).subscribe((data: httpResponse) => {
        if (data.success) {
          this.ngFlashMessageService.showFlashMessage({
            messages: ["Rol Agregado Al Sistema"], 
            dismissible: false , 
            timeout: 5000,
            type: 'success'
          })
          
        } else {
          this.ngFlashMessageService.showFlashMessage({
            messages: ["Rol No Pudo Ser Agregado Al Sistema, Nombre Ya Existe"], 
            dismissible: false , 
            timeout: 5000,
            type: 'danger'
          })
      }
  
      this.hide = false;
      }, (error) => {
        console.log(error);
      });
    }


}
      