
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyCRUDService } from 'src/app/services/company-crud.service';
import { CRole } from './../../interfaces/croleinterface';
import { NgFlashMessageService } from 'ng-flash-messages';
import { httpResponse } from './../../interfaces/httpResponse';


@Component({
  selector: 'app-company-area',
  templateUrl: './company-area.component.html',
  styleUrls: ['./company-area.component.scss']
})
export class CompanyAreaComponent implements OnInit {
  pageActual: number = 1;
  isLinear = true;
  panelOpenState = false;

  name: FormGroup;
  description: FormGroup;
  upperAreaID: FormGroup;
  

  hide = false;

    /* properties from database */
    areas: CRole;

  constructor(
    private _formBuilder: FormBuilder,
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
    this.upperAreaID = this._formBuilder.group({
      upperAreaID: ['', Validators.required]
    });

    this.company.listAreas().subscribe((data:CRole) => {
      this.areas = data;
      console.log(this.areas.elements); 
     });
  }

  addArea() {

    this.hide = true;

    let newArea = {
      name: this.name.get('name').value,
      description: this.description.get('description').value,
      upperAreaID: this.upperAreaID.get('upperAreaID').value
    }

    this.company.addCompanyArea(newArea).subscribe((data: httpResponse) => {
      if (data.success) {
        this.ngFlashMessageService.showFlashMessage({
          messages: ["Área Agregada Al Sistema"], 
          dismissible: false , 
          timeout: 5000,
          type: 'success'
        })
        
      } else {
        this.ngFlashMessageService.showFlashMessage({
          messages: ["Área No Pudo Ser Agregada Al Sistema, Email o Usuario ya existen"], 
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