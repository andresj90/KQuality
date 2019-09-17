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
  selector: 'app-rol-system',
  templateUrl: './rol-system.component.html',
  styleUrls: ['./rol-system.component.scss']
})
export class RolSystemComponent implements OnInit {

  isLinear = true;
  panelOpenState = false;
  hide = true;

  name: FormGroup;
  description: FormGroup;

  /* properties from database */
  systemroles:  CRole;

  matcher = new MyErrorStateMatcher();

  constructor(
    private _formBuilder: FormBuilder ,
    private company: CompanyCRUDService 
  ) { }

  ngOnInit() {
    this.name = this._formBuilder.group({
      name: ['', Validators.required]
    });
    this.description = this._formBuilder.group({
      description: ['', Validators.required]
    });
    this.company.listSystemRoles().subscribe((data:CRole) => {
      this.systemroles = data;
      console.log(this.systemroles.elements); 
     });
  }

  addSystemrole() {
    let newSystemrole = {
      name: this.name.get('name').value,
      description: this.description.get('description').value
    }
    this.company.addNewSystemRole(newSystemrole).subscribe((data) => {
      console.log(data);
    }, (error) => {
      console.log(error);
    });
    let systemrol = JSON.stringify(newSystemrole); 
    console.log(`NEW SYSTEMROL ${systemrol}`);
  }

}
