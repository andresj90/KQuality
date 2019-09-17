import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyCRUDService } from 'src/app/services/company-crud.service';
import { CRole } from './../../interfaces/croleinterface';

@Component({
  selector: 'app-company-area',
  templateUrl: './company-area.component.html',
  styleUrls: ['./company-area.component.scss']
})
export class CompanyAreaComponent implements OnInit {
  isLinear = true;
  panelOpenState = false;

  name: FormGroup;
  description: FormGroup;

  /* properties from database */
  areas: CRole;

  constructor(
    private _formBuilder: FormBuilder,
    private company: CompanyCRUDService 
    ) { }

  ngOnInit() {
    this.name = this._formBuilder.group({
      name: ['', Validators.required]
    });
    this.description = this._formBuilder.group({
      description: ['', Validators.required]
    });

    this.company.listAreas().subscribe((data:CRole) => {
      this.areas = data;
      console.log(this.areas.elements); 
     });
     
  }

  addArea() {
    let newArea = {
      name: this.name.get('name').value,
      description: this.description.get('description').value
    }

    this.company.addCompanyArea(newArea).subscribe((data) => {
      console.log(data);
    }, (error) => {
      console.log(error);
    });

    let area = JSON.stringify(newArea); 
    console.log(`NEW AREA ${area}`);
  }

}