import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CompanyCRUDService } from 'src/app/services/company-crud.service';


@Component({
  selector: 'app-rol-system',
  templateUrl: './rol-system.component.html',
  styleUrls: ['./rol-system.component.scss']
})
export class RolSystemComponent implements OnInit {

  isLinear = true;
  name: FormGroup;
  description: FormGroup;



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
  }

  addRole() {
    let newRole = {
      name: this.name.get('name').value,
      description: this.description.get('description').value
    }

    this.company.addNewSystemRole(newRole).subscribe((data) => {
      console.log(data);
    }, (error) => {
      console.log(error);
    });

  }

}
