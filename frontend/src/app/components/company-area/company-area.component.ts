import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyCRUDService } from 'src/app/services/company-crud.service';

@Component({
  selector: 'app-company-area',
  templateUrl: './company-area.component.html',
  styleUrls: ['./company-area.component.scss']
})
export class CompanyAreaComponent implements OnInit {
  isLinear = true;
  name: FormGroup;
  description: FormGroup;
  panelOpenState = false;

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

<<<<<<< HEAD
    let area = JSON.stringify(newArea); 
    console.log(`NEW AREA ${area}`);
=======
>>>>>>> d238649f18c9a507b4e98d1ec35bfd335f625f6a
  }


}
