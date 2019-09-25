import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyCRUDService } from 'src/app/services/company-crud.service';
import { CRole } from './../../interfaces/croleinterface';
import { NgFlashMessageService } from 'ng-flash-messages';
import { httpResponse } from './../../interfaces/httpResponse';


@Component({
  selector: 'app-rol-system',
  templateUrl: './rol-system.component.html',
  styleUrls: ['./rol-system.component.scss']
})
export class RolSystemComponent implements OnInit {

  isLinear = true;
  panelOpenState = false;
  hide= false;

  name: FormGroup;
  description: FormGroup;

  /* properties from database */
  systemroles:  CRole;



  constructor(
    private _formBuilder: FormBuilder ,
    private company: CompanyCRUDService,
    private ngFlashMessageService: NgFlashMessageService
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
    this.hide = true;
    let newSystemrole = {
      name: this.name.get('name').value,
      description: this.description.get('description').value
    }
    this.company.addNewSystemRole(newSystemrole).subscribe((data : httpResponse) => {
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
    let systemrol = JSON.stringify(newSystemrole); 
    console.log(`NEW SYSTEMROL ${systemrol}`);
  }

}
